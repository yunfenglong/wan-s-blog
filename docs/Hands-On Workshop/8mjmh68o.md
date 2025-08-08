---
title: "HDFS Introduction: Architecture, Components, and Best Practices"
createTime: 2025/04/07 20:10:41
permalink: /article/8mjmh68o/
tags:
    - Hadoop
    - HDFS
    - Big Data
    - Distributed Systems
---

## Overview

Hadoop Distributed File System (HDFS) is the primary storage system used by Hadoop applications. Designed to run on commodity hardware, HDFS provides high-throughput access to application data and is suitable for applications with large data sets.

::: warning
HDFS is designed for write-once, read-many access patterns and may not be suitable for low-latency access requirements.
:::

## Architecture Overview

### Master-Slave Architecture

HDFS follows a master-slave architecture consisting of:

- **NameNode**: Manages the file system namespace and regulates access to files
- **DataNode**: Stores actual data blocks and serves read/write requests from clients
- **Client**: Applications that access HDFS data

::: steps
1. **NameNode**: Maintains the file system tree and metadata
2. **DataNodes**: Store data blocks across the cluster
3. **Client**: Communicates with both NameNode and DataNodes
:::

### Core Components

#### NameNode

The NameNode is the centerpiece of HDFS:

- **Metadata Management**: Stores file system namespace (directory tree, file names, permissions, etc.)
- **Block Management**: Tracks data blocks and their locations
- **Access Control**: Manages client access to files

::: tip
The NameNode is a single point of failure in a standard HDFS cluster. Consider using High Availability (HA) configurations for production environments.
:::

#### DataNode

DataNodes are the workhorses of HDFS:

- **Data Storage**: Stores actual data blocks (typically 128MB or 256MB each)
- **Heartbeat**: Regularly reports to NameNode
- **Block Verification**: Verifies data integrity using checksums

#### Client

The client component:

- **File Operations**: Initiates read/write requests
- **NameNode Communication**: Queries metadata and block locations
- **DataNode Communication**: Directly interacts with DataNodes for data transfer

## Data Storage Model

### Blocks

HDFS stores data in large blocks:

```bash
# Check current block size
hdfs dfsadmin -confKey dfs.blocksize

# Typical block sizes:
# - Hadoop 1.x: 64MB
# - Hadoop 2.x: 128MB (default)
# - Hadoop 3.x: 128MB (default), up to 2GB
```

### Replication

HDFS replicates blocks across multiple DataNodes:

```bash
# Check replication factor
hdfs dfsadmin -confKey dfs.replication

# Typical replication factor: 3
```

::: steps
1. Client writes data to first DataNode
2. First DataNode forwards data to subsequent DataNodes
3. Data is written in a pipeline fashion
4. All replicas must be written successfully
:::

## HDFS Commands

### Basic File Operations

```bash
# Create directories
hdfs dfs -mkdir /user/hadoop

# Upload local files to HDFS
hdfs dfs -put localfile.txt /user/hadoop/

# Download files from HDFS
hdfs dfs -get /user/hadoop/remote.txt local.txt

# List files
hdfs dfs -ls /user/hadoop/

# Remove files
hdfs dfs -rm /user/hadoop/oldfile.txt
```

### Advanced Operations

```bash
# Set replication factor
hdfs dfs -setrep -R 3 /user/hadoop/

# Check disk usage
hdfs dfs -du -h /user/hadoop/

# Check file system status
hdfs dfsadmin -report

# Enter safe mode (maintenance mode)
hdfs dfsadmin -safemode enter
hdfs dfsadmin -safemode leave
```

## Configuration Files

### Core Configuration

Edit `core-site.xml`:

```xml
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://namenode:8020</value>
    </property>
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/var/hadoop/tmp</value>
    </property>
</configuration>
```

### HDFS Configuration

Edit `hdfs-site.xml`:

```xml
<configuration>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>/var/hadoop/hdfs/namenode</value>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>/var/hadoop/hdfs/datanode</value>
    </property>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
    </property>
    <property>
        <name>dfs.blocksize</name>
        <value>134217728</value>
    </property>
</configuration>
```

## Performance Optimization

### Block Size Configuration

```bash
# Optimal block size considerations:
# - Large files: Use larger blocks (256MB, 512MB, 1GB)
# - Small files: Use smaller blocks (64MB, 128MB)
# - Consider MapReduce split size alignment

# Set block size for specific operations
hdfs dfs -D dfs.blocksize=268435456 -put largefile.dat /user/hadoop/
```

### Memory Configuration

```xml
<!-- In mapred-site.xml -->
<property>
    <name>mapreduce.map.memory.mb</name>
    <value>1536</value>
</property>
<property>
    <name>mapreduce.reduce.memory.mb</name>
    <value>3072</value>
</property>
```

## Security Considerations

### Authentication

```bash
# Enable Kerberos authentication
hdfs dfs -D hadoop.security.authentication=kerberos -ls /
```

### Permissions

```bash
# Set file permissions
hdfs dfs -chmod 750 /user/hadoop/protected

# Set ownership
hdfs dfs -chown hadoop:hadoop /user/hadoop/data

# View permissions
hdfs dfs -ls -la /user/hadoop/
```

## Monitoring and Maintenance

### Health Checks

```bash
# Check cluster health
hdfs dfsadmin -report

# Check DataNode status
hdfs dfsadmin -report -live

# Check under-replicated blocks
hdfs fsck /user/hadoop -locations -files -blocks
```

### Maintenance Operations

```bash
# Roll over NameNode edits
hdfs dfsadmin -rollEdits

# Refresh DataNodes
hdfs dfsadmin -refreshNodes

# Decommission DataNodes
echo "datanode3.example.com" > decommissioning-nodes.txt
hdfs dfsadmin -refreshNodes
```

## Common Issues and Solutions

### Issue 1: NameNode Not Starting

```bash
# Check NameNode logs
tail -f /var/hadoop/hdfs/namenode.log

# Check for existing processes
jps | grep NameNode

# Safe mode troubleshooting
hdfs dfsadmin -safemode get
```

### Issue 2: DataNode Connection Issues

```bash
# Check DataNode status
hdfs dfsadmin -report -dead

# Verify DataNode logs
tail -f /var/hadoop/hdfs/datanode.log

# Reset DataNode
rm -rf /var/hadoop/hdfs/datanode/*
hdfs datanode -format
```

### Issue 3: Disk Space Issues

```bash
# Check disk usage
hdfs dfsadmin -report

# Identify large files
hdfs dfs -du / | sort -nr | head -10

# Clean up temporary files
hdfs dfs -expunge
```

## Best Practices

### Data Management

1. **Use appropriate file sizes**: Store large files (100MB+) in HDFS
2. **Avoid small files**: Use Hadoop SequenceFile, Avro, or Parquet for small files
3. **Compress data**: Use compression to save storage space
4. **Partition data**: Organize data logically for better performance

### Performance Tuning

```bash
# Enable compression
hadoop jar hadoop-examples.jar teragen -Dmapreduce.map.output.compress=true \
    -Dmapreduce.map.output.compress.codec=org.apache.hadoop.io.compress.GzipCodec \
    1000000 /user/hadoop/output

# Use appropriate file formats
hadoop jar parquet-tools.jar schema input.parquet
```

### Operational Excellence

1. **Monitor cluster health**: Regular health checks
2. **Plan for growth**: Scale DataNodes as needed
3. **Backup critical data**: Regular backups of important files
4. **Document configurations**: Keep configuration files documented
5. **Test procedures**: Test backup and recovery procedures

