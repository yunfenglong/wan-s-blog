---
title: "监控K8S服务资源使用情况完整指南"
createTime: 2025/07/15 20:15:00
permalink: /zh-CN/quick-bytes/pzwk9jri/
tags:
   - Kubernetes
   - K8S
   - DevOps
   - 容器
---

## 概述

监控部署在Kubernetes上的服务资源使用情况对于维护集群健康、优化性能和确保成本效率至关重要。本指南提供了全面的方法来跟踪和分析K8S环境中的资源消耗。

::: warning
请定期监控资源使用情况，以防止资源耗尽并确保应用程序的最佳性能。
:::

## 基础资源监控

### 使用 `kubectl top`

检查资源使用情况的最简单方法：

```bash
# 检查所有Pod的资源使用情况
kubectl top pods

# 检查节点的资源使用情况
kubectl top nodes

# 实时监控资源使用情况
kubectl top pods --watch

# 显示特定命名空间
kubectl top pods -n namespace-name

# 按内存使用量排序
kubectl top pods --sort-by=memory

# 按CPU使用量排序
kubectl top pods --sort-by=cpu
```

### 资源配额和限制

```bash
# 检查资源配额
kubectl get quota -n namespace-name

# 检查资源限制和请求
kubectl get limits -n namespace-name

# 检查Pod资源请求和限制
kubectl get pods -o custom-columns=NAME:.metadata.name,CPU:.spec.containers[*].resources.requests.cpu,MEM:.spec.containers[*].resources.requests.memory,CPULIMIT:.spec.containers[*].resources.limits.cpu,MEMLIMIT:.spec.containers[*].resources.limits.memory
```

## 高级监控命令

### 详细资源分析

```bash
# 获取详细的Pod资源信息
kubectl get pods -o yaml | grep -E "(resources|requests|limits)"

# 按命名空间检查资源使用情况
kubectl get ns -o custom-columns=NAME:.metadata.name,RESOURCEREQUESTS:.status.resources.requests.cpu,RESOURCELIMITS:.status.resources.limits.cpu

# 获取容器特定的资源使用情况
kubectl top pods --containers
```

### 节点资源分析

```bash
# 获取带有资源使用情况的详细节点信息
kubectl describe nodes

# 检查可分配与已分配的资源
kubectl get nodes -o custom-columns=NAME:.metadata.name,ALLOCATABLECPU:.status.allocatable.cpu,ALLOCATABLEMEM:.status.allocatable.memory,ALLOCATEDCPU:.status.capacity.cpu,ALLOCATEDMEM:.status.capacity.memory

# 获取节点容量和可分配资源
kubectl get nodes -o jsonpath='{.items[*].status.capacity}{"\n"}'
kubectl get nodes -o jsonpath='{.items[*].status.allocatable}{"\n"}'
```

## 使用K8S Metrics Server

### 安装和验证Metrics Server

```bash
# 安装metrics server
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# 检查metrics server状态
kubectl get deployment -n kube-system metrics-server
kubectl get pods -n kube-system metrics-server-xxxxx

# 验证指标是否可用
kubectl top nodes
kubectl top pods
```

### Metrics Server配置

```bash
# 检查metrics server日志
kubectl logs -n kube-system deployment/metrics-server

# 配置metrics server（如需要）
kubectl edit deployment -n kube-system metrics-server
```

## 使用Prometheus和Grafana

### Prometheus配置

```yaml
# prometheus-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
  namespace: monitoring
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
      evaluation_interval: 15s
    scrape_configs:
      - job_name: 'kubernetes-pods'
        kubernetes_sd_configs:
          - role: pod
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
            action: keep
            regex: true
```

### Grafana仪表板

```bash
# 部署Grafana
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana

# 访问Grafana
kubectl port-forward svc/grafana 3000:80

# 导入K8S仪表板（ID: 6417, 122, 7362）
```

## 资源使用分析

### 关键资源检查

```bash
# 检查资源使用量高的Pod
kubectl top pods --sort-by=cpu | head -10
kubectl top pods --sort-by=memory | head -10

# 检查超出限制的Pod
kubectl get pods -n namespace-name --all-namespaces -o custom-columns=NAME:.metadata.name,REQUESTS:.spec.containers[*].resources.requests.cpu,LIMITS:.spec.containers[*].resources.limits.cpu,USAGE:$.spec.containers.resources.requests.cpu

# 检查因资源限制而处于pending状态的Pod
kubectl get pods -n namespace-name --field-selector=status.phase=Pending
```

### 资源效率分析

```bash
# 计算资源利用率
kubectl top nodes | awk '
{
  cpu_usage = $3
  cpu_total = $4
  mem_usage = $5
  mem_total = $6
  cpu_util = cpu_usage / cpu_total * 100
  mem_util = mem_usage / mem_total * 100
  printf "节点: %s - CPU: %.1f%% 内存: %.1f%%\n", $1, cpu_util, mem_util
}'

# 检查资源请求vs使用情况
kubectl top pods --no-headers | while read name cpu mem rest; do
  requests=$(kubectl get pod $name -o jsonpath='{.spec.containers[*].resources.requests.cpu}')
  echo "Pod: $name - CPU: $cpu - 请求: $requests"
done
```

## 资源管理最佳实践

### 设置资源限制

```bash
# 带有资源限制的Pod示例
cat << EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: resource-demo
spec:
  containers:
  - name: frontend
    image: nginx
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
  - name: backend
    image: redis
    resources:
      requests:
        memory: "128Mi"
        cpu: "500m"
      limits:
        memory: "256Mi"
        cpu: "1000m"
EOF
```

### 水平Pod自动扩缩容（HPA）

```bash
# 创建基于CPU的HPA
kubectl autoscale deployment my-app --cpu-percent=70 --min=2 --max=10

# 创建基于内存的HPA
kubectl autoscale deployment my-app --cpu-percent=50 --memory-percent=70 --min=2 --max=10

# 检查HPA状态
kubectl get hpa

# 检查HPA详情
kubectl describe hpa my-app
```

## 故障排除资源问题

### 常见资源问题

```bash
# 检查被驱逐的Pod
kubectl get pods --all-namespaces | grep Evicted

# 检查处于CrashLoopBackOff状态的Pod
kubectl get pods --field-selector=status.phase=Running --all-namespaces | grep -i crash

# 检查节点资源压力
kubectl describe node <node-name> | grep -i pressure

# 检查容器资源限制
kubectl get pods -o json | jq '.items[].spec.containers[] | {name: .name, requests: .resources.requests, limits: .resources.limits}'
```

### 资源泄漏检测

```bash
# 监控内存使用趋势
kubectl top pods --watch -n namespace-name

# 检查内存泄漏
kubectl get pods -n namespace-name -o jsonpath='{.items[*].status.containerStatuses[*].restartCount}' | tr ' ' '\n' | sort -n | uniq -c

# 检查容器资源限制
kubectl get pods -n namespace-name -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.name}{"\t"}{.resources.requests.memory}{"\t"}{.resources.limits.memory}{"\n"}{end}{end}'
```

## 自动化监控脚本

### 每日资源报告

```bash
#!/bin/bash
# k8s-resource-report.sh

echo "=== K8S资源使用报告 ==="
echo "日期: $(date)"
echo ""

echo "=== 节点资源使用情况 ==="
kubectl top nodes | column -t
echo ""

echo "=== CPU使用量最高的Pod ==="
kubectl top pods --sort-by=cpu | head -10
echo ""

echo "=== 内存使用量最高的Pod ==="
kubectl top pods --sort-by=memory | head -10
echo ""

echo "=== Pending的Pod（资源限制） ==="
kubectl get pods --field-selector=status.phase=Pending
echo ""

echo "=== 被驱逐的Pod ==="
kubectl get pods --all-namespaces | grep Evicted
```

### 资源警报脚本

```bash
#!/bin/bash
# k8s-resource-alert.sh

NAMESPACES=("production" "staging" "development")
CPU_THRESHOLD=80
MEMORY_THRESHOLD=85

for namespace in "${NAMESPACES[@]}"; do
    echo "检查命名空间: $namespace"
    
    # 检查节点资源使用情况
    echo "节点资源使用情况:"
    kubectl top nodes --no-headers | while read name cpu mem rest; do
        cpu_usage=$(echo "$cpu" | sed 's/%//')
        mem_usage=$(echo "$mem" | sed 's/%//')
        
        if (( $(echo "$cpu_usage > $CPU_THRESHOLD" | bc -l) )) || (( $(echo "$mem_usage > $MEMORY_THRESHOLD" | bc -l) )); then
            echo "警告: $node - CPU: $cpu%, 内存: $mem%"
        fi
    done
    
    # 检查Pod资源使用情况
    echo "高资源使用量Pod:"
    kubectl top pods -n $namespace --sort-by=cpu | head -5
    kubectl top pods -n $namespace --sort-by=memory | head -5
    echo ""
done
```

## 安全考虑

### 资源安全最佳实践

```bash
# 在关键命名空间设置资源限制
kubectl limitrange -n production --create --limits=cpu=1000,memory=8Gi

# 实施资源配额
kubectl quota -n production --hard=pods=10,services=5,requests.cpu=1000,memory=8G

# 检查资源安全策略
kubectl get resourcequota -A
kubectl get limitrange -A

# 监控资源安全违规
kubectl get events --field-selector=reason=FailedScheduling -A
```