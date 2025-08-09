---
title: "Monitoring K8S Service Resource Usage: A Complete Guide"
createTime: 2025/07/15 20:15:00
permalink: /quick-bytes/pzwk9jri/
tags:
   - Kubernetes
   - K8S
   - DevOps
   - Container
---

## Overview

Monitoring resource usage of services deployed on Kubernetes is essential for maintaining cluster health, optimizing performance, and ensuring cost efficiency. This guide provides comprehensive methods to track and analyze resource consumption across your K8S environment.

::: warning
Always monitor resource usage regularly to prevent resource exhaustion and ensure optimal performance of your applications.
:::

## Basic Resource Monitoring

### Using `kubectl top`

The simplest way to check resource usage:

```bash
# Check resource usage for all pods
kubectl top pods

# Check resource usage for nodes
kubectl top nodes

# Watch real-time resource usage
kubectl top pods --watch

# Show specific namespace
kubectl top pods -n namespace-name

# Sort by memory usage
kubectl top pods --sort-by=memory

# Sort by CPU usage
kubectl top pods --sort-by=cpu
```

### Resource Quotas and Limits

```bash
# Check resource quotas
kubectl get quota -n namespace-name

# Check resource limits and requests
kubectl get limits -n namespace-name

# Check pod resource requests and limits
kubectl get pods -o custom-columns=NAME:.metadata.name,CPU:.spec.containers[*].resources.requests.cpu,MEM:.spec.containers[*].resources.requests.memory,CPULIMIT:.spec.containers[*].resources.limits.cpu,MEMLIMIT:.spec.containers[*].resources.limits.memory
```

## Advanced Monitoring Commands

### Detailed Resource Analysis

```bash
# Get detailed pod resource information
kubectl get pods -o yaml | grep -E "(resources|requests|limits)"

# Check resource usage by namespace
kubectl get ns -o custom-columns=NAME:.metadata.name,RESOURCEREQUESTS:.status.resources.requests.cpu,RESOURCELIMITS:.status.resources.limits.cpu

# Get container-specific resource usage
kubectl top pods --containers
```

### Node Resource Analysis

```bash
# Get detailed node information with resource usage
kubectl describe nodes

# Check allocatable vs allocated resources
kubectl get nodes -o custom-columns=NAME:.metadata.name,ALLOCATABLECPU:.status.allocatable.cpu,ALLOCATABLEMEM:.status.allocatable.memory,ALLOCATEDCPU:.status.capacity.cpu,ALLOCATEDMEM:.status.capacity.memory

# Get node capacity and allocatable resources
kubectl get nodes -o jsonpath='{.items[*].status.capacity}{"\n"}'
kubectl get nodes -o jsonpath='{.items[*].status.allocatable}{"\n"}'
```

## Using K8S Metrics Server

### Install and Verify Metrics Server

```bash
# Install metrics server
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# Check metrics server status
kubectl get deployment -n kube-system metrics-server
kubectl get pods -n kube-system metrics-server-xxxxx

# Verify metrics are available
kubectl top nodes
kubectl top pods
```

### Metrics Server Configuration

```bash
# Check metrics server logs
kubectl logs -n kube-system deployment/metrics-server

# Configure metrics server (if needed)
kubectl edit deployment -n kube-system metrics-server
```

## Using Prometheus and Grafana

### Prometheus Configuration

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

### Grafana Dashboards

```bash
# Deploy Grafana
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update
helm install grafana grafana/grafana

# Access Grafana
kubectl port-forward svc/grafana 3000:80

# Import K8S dashboards (ID: 6417, 122, 7362)
```

## Resource Usage Analysis

### Critical Resource Checks

```bash
# Check pods with high resource usage
kubectl top pods --sort-by=cpu | head -10
kubectl top pods --sort-by=memory | head -10

# Check pods exceeding limits
kubectl get pods -n namespace-name --all-namespaces -o custom-columns=NAME:.metadata.name,REQUESTS:.spec.containers[*].resources.requests.cpu,LIMITS:.spec.containers[*].resources.limits.cpu,USAGE:$.spec.containers.resources.requests.cpu

# Check for pods in pending state due to resource constraints
kubectl get pods -n namespace-name --field-selector=status.phase=Pending
```

### Resource Efficiency Analysis

```bash
# Calculate resource utilization
kubectl top nodes | awk '
{
  cpu_usage = $3
  cpu_total = $4
  mem_usage = $5
  mem_total = $6
  cpu_util = cpu_usage / cpu_total * 100
  mem_util = mem_usage / mem_total * 100
  printf "Node: %s - CPU: %.1f%% Memory: %.1f%%\n", $1, cpu_util, mem_util
}'

# Check resource requests vs usage
kubectl top pods --no-headers | while read name cpu mem rest; do
  requests=$(kubectl get pod $name -o jsonpath='{.spec.containers[*].resources.requests.cpu}')
  echo "Pod: $name - CPU: $cpu - Requests: $requests"
done
```

## Resource Management Best Practices

### Setting Resource Limits

```bash
# Example pod with resource limits
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

### Horizontal Pod Autoscaler (HPA)

```bash
# Create HPA for CPU-based scaling
kubectl autoscale deployment my-app --cpu-percent=70 --min=2 --max=10

# Create HPA for memory-based scaling
kubectl autoscale deployment my-app --cpu-percent=50 --memory-percent=70 --min=2 --max=10

# Check HPA status
kubectl get hpa

# Check HPA details
kubectl describe hpa my-app
```

## Troubleshooting Resource Issues

### Common Resource Problems

```bash
# Check for evicted pods
kubectl get pods --all-namespaces | grep Evicted

# Check for pods in CrashLoopBackOff
kubectl get pods --field-selector=status.phase=Running --all-namespaces | grep -i crash

# Check node resource pressure
kubectl describe node <node-name> | grep -i pressure

# Check for container resource limits
kubectl get pods -o json | jq '.items[].spec.containers[] | {name: .name, requests: .resources.requests, limits: .resources.limits}'
```

### Resource Leak Detection

```bash
# Monitor memory usage trends
kubectl top pods --watch -n namespace-name

# Check for memory leaks
kubectl get pods -n namespace-name -o jsonpath='{.items[*].status.containerStatuses[*].restartCount}' | tr ' ' '\n' | sort -n | uniq -c

# Check container resource limits
kubectl get pods -n namespace-name -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{range .spec.containers[*]}{.name}{"\t"}{.resources.requests.memory}{"\t"}{.resources.limits.memory}{"\n"}{end}{end}'
```

## Automated Monitoring Scripts

### Daily Resource Report

```bash
#!/bin/bash
# k8s-resource-report.sh

echo "=== K8S Resource Usage Report ==="
echo "Date: $(date)"
echo ""

echo "=== Node Resource Usage ==="
kubectl top nodes | column -t
echo ""

echo "=== Top CPU-Consuming Pods ==="
kubectl top pods --sort-by=cpu | head -10
echo ""

echo "=== Top Memory-Consuming Pods ==="
kubectl top pods --sort-by=memory | head -10
echo ""

echo "=== Pending Pods (Resource Constraints) ==="
kubectl get pods --field-selector=status.phase=Pending
echo ""

echo "=== Evicted Pods ==="
kubectl get pods --all-namespaces | grep Evicted
```

### Resource Alert Script

```bash
#!/bin/bash
# k8s-resource-alert.sh

NAMESPACES=("production" "staging" "development")
CPU_THRESHOLD=80
MEMORY_THRESHOLD=85

for namespace in "${NAMESPACES[@]}"; do
    echo "Checking namespace: $namespace"
    
    # Check node resource usage
    echo "Node Resource Usage:"
    kubectl top nodes --no-headers | while read name cpu mem rest; do
        cpu_usage=$(echo "$cpu" | sed 's/%//')
        mem_usage=$(echo "$mem" | sed 's/%//')
        
        if (( $(echo "$cpu_usage > $CPU_THRESHOLD" | bc -l) )) || (( $(echo "$mem_usage > $MEMORY_THRESHOLD" | bc -l) )); then
            echo "WARNING: $node - CPU: $cpu%, Memory: $mem%"
        fi
    done
    
    # Check pod resource usage
    echo "High Resource Usage Pods:"
    kubectl top pods -n $namespace --sort-by=cpu | head -5
    kubectl top pods -n $namespace --sort-by=memory | head -5
    echo ""
done
```

## Security Considerations

### Resource Security Best Practices

```bash
# Set resource limits on critical namespaces
kubectl limitrange -n production --create --limits=cpu=1000,memory=8Gi

# Implement resource quotas
kubectl quota -n production --hard=pods=10,services=5,requests.cpu=1000,memory=8G

# Check resource security policies
kubectl get resourcequota -A
kubectl get limitrange -A

# Monitor resource security violations
kubectl get events --field-selector=reason=FailedScheduling -A
```