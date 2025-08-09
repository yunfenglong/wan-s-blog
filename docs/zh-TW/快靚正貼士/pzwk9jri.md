---
title: "監控K8S服務資源使用情況：完整指南"
createTime: 2025/07/15 20:15:00
permalink: /zh-TW/quick-bytes/pzwk9jri/
tags:
   - Kubernetes
   - K8S
   - DevOps
   - 容器
---

## 概述

監控部署喺Kubernetes上嘅服務資源使用情況對於維護叢集健康、優化性能同確保成本效率至關重要。呢篇指南提供咗全面嘅方法嚟追蹤同分析K8S環境中嘅資源消耗。

::: warning
請定期監控資源使用情況，以防止資源耗盡同確保應用程式嘅最佳性能。
:::

## 基礎資源監控

### 使用 `kubectl top`

檢查資源使用情況嘅最簡單方法：

```bash
# 檢查所有Pod嘅資源使用情況
kubectl top pods

# 檢查節點嘅資源使用情況
kubectl top nodes

# 即時監控資源使用情況
kubectl top pods --watch

# 顯示特定命名空間
kubectl top pods -n namespace-name

# 按記憶體使用量排序
kubectl top pods --sort-by=memory

# 按CPU使用量排序
kubectl top pods --sort-by=cpu
```

### 資源配額同限制

```bash
# 檢查資源配額
kubectl get quota -n namespace-name

# 檢查資源限制同請求
kubectl get limits -n namespace-name

# 檢查Pod資源請求同限制
kubectl get pods -o custom-columns=NAME:.metadata.name,CPU:.spec.containers[*].resources.requests.cpu,MEM:.spec.containers[*].resources.requests.memory,CPULIMIT:.spec.containers[*].resources.limits.cpu,MEMLIMIT:.spec.containers[*].resources.limits.memory
```

## 高級監控命令

### 詳細資源分析

```bash
# 獲取詳細嘅Pod資源資訊
kubectl get pods -o yaml | grep -E "(resources|requests|limits)"

# 按命名空間檢查資源使用情況
kubectl get ns -o custom-columns=NAME:.metadata.name,RESOURCEREQUESTS:.status.resources.requests.cpu,RESOURCELIMITS:.status.resources.limits.cpu

# 獲取容器特定嘅資源使用情況
kubectl top pods --containers
```

### 節點資源分析

```bash
# 獲取帶有資源使用情況嘅詳細節點資訊
kubectl describe nodes

# 檢查可分配同已分配嘅資源
kubectl get nodes -o custom-columns=NAME:.metadata.name,ALLOCATABLECPU:.status.allocatable.cpu,ALLOCATABLEMEM:.status.allocatable.memory,ALLOCATEDCPU:.status.capacity.cpu,ALLOCATEDMEM:.status.capacity.memory

# 獲取節點容量同可分配資源
kubectl get nodes -o jsonpath='{.items[*].status.capacity}{"\n"}'
kubectl get nodes -o jsonpath='{.items[*].status.allocatable}{"\n"}'
```

## 使用K8S Metrics Server

### 安裝同驗證Metrics Server

```bash
# 安裝metrics server
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# 檢查metrics server狀態
kubectl get deployment -n kube-system metrics-server
kubectl get pods -n kube-system metrics-server-xxxxx

# 驗證指標是否可用
kubectl top nodes
kubectl top pods
```

### Metrics Server配置

```bash
# 檢查metrics server日誌
kubectl logs -n kube-system deployment/metrics-server

# 配置metrics server（如需要）
kubectl edit deployment -n kube-system metrics-server
```

## 使用Prometheus同Grafana

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

### Grafana儀表板

```bash
# 部署Grafana
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana

# 訪問Grafana
kubectl port-forward svc/grafana 3000:80

# 導入K8S儀表板（ID: 6417, 122, 7362）
```

## 資源使用分析

### 關鍵資源檢查

```bash
# 檢查資源使用量高嘅Pod
kubectl top pods --sort-by=cpu | head -10
kubectl top pods --sort-by=memory | head -10

# 檢查超出限制嘅Pod
kubectl get pods -n namespace-name --all-namespaces -o custom-columns=NAME:.metadata.name,REQUESTS:.spec.containers[*].resources.requests.cpu,LIMITS:.spec.containers[*].resources.limits.cpu,USAGE:$.spec.containers.resources.requests.cpu

# 檢查因資源限制而處於pending狀態嘅Pod
kubectl get pods -n namespace-name --field-selector=status.phase=Pending
```

### 資源效率分析

```bash
# 計算資源利用率
kubectl top nodes | awk '
{
  cpu_usage = $3
  cpu_total = $4
  mem_usage = $5
  mem_total = $6
  cpu_util = cpu_usage / cpu_total * 100
  mem_util = mem_usage / mem_total * 100
  printf "節點: %s - CPU: %.1f%% 記憶體: %.1f%%\n", $1, cpu_util, mem_util
}'

# 檢查資源請求vs使用情況
kubectl top pods --no-headers | while read name cpu mem rest; do
  requests=$(kubectl get pod $name -o jsonpath='{.spec.containers[*].resources.requests.cpu}')
  echo "Pod: $name - CPU: $cpu - 請求: $requests"
done
```

## 資源管理最佳實踐

### 設置資源限制

```bash
# 帶有資源限制嘅Pod示例
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

### 水平Pod自動擴縮容（HPA）

```bash
# 創建基於CPU嘅HPA
kubectl autoscale deployment my-app --cpu-percent=70 --min=2 --max=10

# 創建基於記憶體嘅HPA
kubectl autoscale deployment my-app --cpu-percent=50 --memory-percent=70 --min=2 --max=10

# 檢查HPA狀態
kubectl get hpa

# 檢查HPA詳情
kubectl describe hpa my-app
```

## 故障排除資源問題

### 常見資源問題

```bash
# 檢查被驅逐嘅Pod
kubectl get pods --all-namespaces | grep Evicted

# 檢查處於CrashLoopBackOff狀態嘅Pod
kubectl get pods --field-selector=status.phase=Running --all-namespaces | grep -i crash

# 檢查節點資源壓力
kubectl describe node <node-name> | grep -i pressure

# 檢查容器資源限制
kubectl get pods -o json | jq '.items[].spec.containers[] | {name: .name, requests: .resources.requests, limits: .resources.limits}'
```

### 資源泄漏檢測

```bash
# 監控記憶體使用趨勢
kubectl top pods --watch -n namespace-name

# 檢查記憶體泄漏
kubectl get pods -n namespace-name -o jsonpath='{.items[*].status.containerStatuses[*].restartCount}' | tr ' ' '\n' | sort -n | uniq -c

# 檢查容器資源限制
kubectl get pods -n namespace-name -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.name}{"\t"}{.resources.requests.memory}{"\t"}{.resources.limits.memory}{"\n"}{end}{end}'
```

## 自動化監控腳本

### 每日資源報告

```bash
#!/bin/bash
# k8s-resource-report.sh

echo "=== K8S資源使用報告 ==="
echo "日期: $(date)"
echo ""

echo "=== 節點資源使用情況 ==="
kubectl top nodes | column -t
echo ""

echo "=== CPU使用量最高嘅Pod ==="
kubectl top pods --sort-by=cpu | head -10
echo ""

echo "=== 記憶體使用量最高嘅Pod ==="
kubectl top pods --sort-by=memory | head -10
echo ""

echo "=== Pending嘅Pod（資源限制） ==="
kubectl get pods --field-selector=status.phase=Pending
echo ""

echo "=== 被驅逐嘅Pod ==="
kubectl get pods --all-namespaces | grep Evicted
```

### 資源警報腳本

```bash
#!/bin/bash
# k8s-resource-alert.sh

NAMESPACES=("production" "staging" "development")
CPU_THRESHOLD=80
MEMORY_THRESHOLD=85

for namespace in "${NAMESPACES[@]}"; do
    echo "檢查命名空間: $namespace"
    
    # 檢查節點資源使用情況
    echo "節點資源使用情況:"
    kubectl top nodes --no-headers | while read name cpu mem rest; do
        cpu_usage=$(echo "$cpu" | sed 's/%//')
        mem_usage=$(echo "$mem" | sed 's/%//')
        
        if (( $(echo "$cpu_usage > $CPU_THRESHOLD" | bc -l) )) || (( $(echo "$mem_usage > $MEMORY_THRESHOLD" | bc -l) )); then
            echo "警告: $node - CPU: $cpu%, 記憶體: $mem%"
        fi
    done
    
    # 檢查Pod資源使用情況
    echo "高資源使用量Pod:"
    kubectl top pods -n $namespace --sort-by=cpu | head -5
    kubectl top pods -n $namespace --sort-by=memory | head -5
    echo ""
done
```

## 安全考慮

### 資源安全最佳實踐

```bash
# 在關鍵命名空間設置資源限制
kubectl limitrange -n production --create --limits=cpu=1000,memory=8Gi

# 實施資源配額
kubectl quota -n production --hard=pods=10,services=5,requests.cpu=1000,memory=8G

# 檢查資源安全策略
kubectl get resourcequota -A
kubectl get limitrange -A

# 監控資源安全違規
kubectl get events --field-selector=reason=FailedScheduling -A
```