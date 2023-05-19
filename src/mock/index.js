import Mock from 'mockjs'

Mock.mock('/api/article/list', 'post', {
        "code": 0,
        "message": "success",
        "data": [
            {
                "id": 1,
                "title": "文章1",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 2,
                "title": "文章2",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 3,
                "title": "文章3",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 4,
                "title": "文章4",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 5,
                "title": "文章5",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 6,
                "title": "文章6",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 7,
                "title": "文章7",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            },
            {
                "id": 8,
                "title": "文章8",
                "content": "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                "author": "kevinhwang",
                "createTime": "2023-04-24 22:05:01"
            }
        ]
    }
)

Mock.mock('/api/article/get', 'post', {
    "code": 0,
    "message": "success",
    "data":
        "<h1>1.了解hadoop集群</h1>\n" +
        "<h2>1.1. <code> hadoop</code>=<code>HDFS</code>+<code>YARN</code>+<code>MapReduce</code></h2>\n" +
        "<p>从<code>hadoop2.X</code>开始，hadoop的组成部分可以分为 如下三部分：</p>\n" +
        "<ul>\n" +
        "    <li>\n" +
        "        <p><code>HDFS</code>：一个Hadoop的分布式文件系统，支持<code>NameNode</code>横向扩展，解决海量数据的存储。</p>\n" +
        "    </li>\n" +
        "    <li>\n" +
        "        <p><code>YARN</code>：一个负责作业调度和集群资源管理的框架，解决资源任务调度。</p>\n" +
        "    </li>\n" +
        "    <li>\n" +
        "        <p><code>MapReduce</code>：一个分布式运算编程框架，用来解决海量数据的计算。</p>\n" +
        "    </li>\n" +
        "</ul>\n" +
        "<p>一个<code>hadoop</code>集群包括<code>HDFS</code>集群和<code>YARN</code>集群，<code>MapReduce</code>是一个编程框架。</p>\n" +
        "<h2>1.2 HDFS集群：<code>namenode</code>和<code>datanode</code></h2>\n" +
        "<p><code>HDFS</code>集群中有两类节点：<code>namenode（管理节点）</code>和<code>datanode（工作节点）</code>：</p>\n" +
        "<ul>\n" +
        "    <li><code>namenode</code>管理文件系统的命名空间，它维护着<strong>文件系统树</strong>及<strong>整棵树内所有的文件和目录</strong>，这些信息以两个文件形式永久保存在本地磁盘上：命名空间镜像文件和编辑日志文件。它也记录者每个文件中<strong>各个块所在的数据节点信息</strong>，但它并不永久保存块的位置信息，因为这些信息会在系统启动时根据数据节点信息重建。</li>\n" +
        "    <li><code>datanode</code>是文件系统的工作节点，他们根据需要存储并检索数据块（受客户端或<code>namenode</code>调度），并且定期向<code>namenode</code>发送它们所存储的块的列表。</li>\n" +
        "</ul>\n" +
        "<h2>1.3 YARN集群：<code>resource manager</code>和<code>node manager</code></h2>\n" +
        "<p><code>YARN</code>通过两类长期运行的守护进程提供自己的核心服务：管理集群上资源使用的资源管理器<code>（resource manager）</code>、运行在集群中所有节点上且能够启动和监控及容器的节点管理器<code>（node manager）</code>。</p>\n" +
        "<h2>1.4 hadoop集群</h2>\n" +
        "<p>一个简单的hadoop集群如下：</p>\n" +
        "<p><img src=\"https://www.kevinhwang.cn/wp-content/uploads/2023/03/post-1776-64258c46a09c7.\" alt=\"hadoop集群\" /></p>\n" +
        "<h1>2. 构建Docker镜像</h1>\n" +
        "<blockquote>\n" +
        "    <p>本章会比较详细地记录Docker镜像构建过程，如果只是想尽快搭建起一个Hadoop集群，并不关心具体搭建细节，可以直接跳转至 [3. 搭建hadoop集群](# 3.搭建Hadoop集群)。</p>\n" +
        "</blockquote>\n" +
        "<p>本次我将用Docker搭建如上图所示的Hadoop集群。</p>\n" +
        "<h2>2.1下载并安装jdk和hadoop</h2>\n" +
        "<p>需要注意的是版本问题，Hadoop到目前最高也只支持到Java11（Hadoop3.3以上），如果版本不正确的话是无法启动hadoop的。从 <a href=\"https://cwiki.apache.org/confluence/display/HADOOP/Hadoop+Java+Versions\">https://cwiki.apache.org/confluence/display/HADOOP/Hadoop+Java+Versions</a> 处可以查询hadoop支持的java版本：</p>\n" +
        "<p><img src=\"https://www.kevinhwang.cn/wp-content/uploads/2023/03/post-1776-64258c478499b.png\" alt=\"image-20230217211240034\" /></p>\n" +
        "<p>本次我选择使用<code>Hadoop2.10.2</code>和<code>java8</code>：</p>\n" +
        "<pre><code class=\"language-dockerfile\">FROM ubuntu:20.04\n" +
        "WORKDIR /root\n" +
        "\n" +
        "# install openssh-server, openjdk, wget, vim, ping\n" +
        "RUN apt-get update &amp;&amp; apt-get install -y openssh-server openjdk-8-jdk wget vim iputils-ping\n" +
        "\n" +
        "# install hadoop 2.10.2\n" +
        "RUN wget https://dlcdn.apache.org/hadoop/common/hadoop-2.10.2/hadoop-2.10.2.tar.gz &amp;&amp; \\\n" +
        "    tar -xzvf hadoop-2.10.2.tar.gz &amp;&amp; \\\n" +
        "    mv hadoop-2.10.2 /usr/local/hadoop &amp;&amp; \\\n" +
        "    rm hadoop-2.10.2.tar.gz</code></pre>\n" +
        "<p>设置环境变量：</p>\n" +
        "<pre><code class=\"language-dockerfile\"># set environment variable\n" +
        "ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64              # 你的jdk安装路径\n" +
        "ENV HADOOP_HOME=/usr/local/hadoop\n" +
        "ENV PATH=$PATH:/usr/local/hadoop/bin:/usr/local/hadoop/sbin  </code></pre>\n" +
        "<h2>2.2 ssh配置</h2>\n" +
        "<p><code>Hadoop</code>控制脚本（并非守护进程）依赖SSH来执行针对整个集群的操作。为了支持无缝式工作，需要允许来自集群内机器的<code>hdfs</code>用户和<code>yarn</code>用户能够无需密码即可登录，最简单的方法就是创建一个公钥/私钥对，存放在Dockerfile中，让整个集群共享该密钥对。</p>\n" +
        "<pre><code class=\"language-dockerfile\"># ssh without key\n" +
        "RUN ssh-keygen -t rsa -f ~/.ssh/id_rsa -P &#039;&#039; &amp;&amp; \\\n" +
        "    cat ~/.ssh/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys</code></pre>\n" +
        "<h2>2.3 创建必要的路径</h2>\n" +
        "<pre><code class=\"language-dockerfile\">RUN mkdir -p ~/hdfs/namenode &amp;&amp; \\\n" +
        "    mkdir -p ~/hdfs/datanode &amp;&amp; \\\n" +
        "    mkdir $HADOOP_HOME/logs</code></pre>\n" +
        "<h2>2.4 编辑配置文件</h2>\n" +
        "<table>\n" +
        "    <thead>\n" +
        "    <tr>\n" +
        "        <th>文件名称</th>\n" +
        "        <th>格式</th>\n" +
        "        <th>描述</th>\n" +
        "    </tr>\n" +
        "    </thead>\n" +
        "    <tbody>\n" +
        "    <tr>\n" +
        "        <td>hadoop-env.sh</td>\n" +
        "        <td>Bash脚本</td>\n" +
        "        <td>脚本中要用到的环境变量，以运行Hadoop</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>mapred-env.sh</td>\n" +
        "        <td>Bash脚本</td>\n" +
        "        <td>脚本中要用到的环境变量，以运行MapReduce(覆盖hadoop-env.sh中设置的变量)</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>yarn-env.sh</td>\n" +
        "        <td>Bash脚本</td>\n" +
        "        <td>脚本中要用到的坏境变量，以运行YARN( 覆盖hadoop-env.sh 中设置的变量）</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>core-site.xml</td>\n" +
        "        <td>Hadoop配置XML</td>\n" +
        "        <td>Hadoop Core 的配置项，例如HDFS 、MapReduce 和YARN 常用的I/O 设置等</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>hdfs-site.xml</td>\n" +
        "        <td>Hadoop配置XML</td>\n" +
        "        <td>Hadoop守护进程的配置项，包括namenode 、辅助namenode 和datanode等</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>mapred-site.xml</td>\n" +
        "        <td>Hadoop配置XML</td>\n" +
        "        <td>Map Reduce 守护进程的配置项，包括作业历史服务器</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>yarn-site.xml</td>\n" +
        "        <td>Hadoop配置XML</td>\n" +
        "        <td><em>YARN 守护进程的配置项，包括资源管理器、web 应</em>用代理服务器和节点管理器</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>slaves</td>\n" +
        "        <td>纯文本</td>\n" +
        "        <td>运行datanode 和节点管理器的机器列表（每行一个）</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>hadoop-metrics2.properties</td>\n" +
        "        <td>java属性</td>\n" +
        "        <td>控制如何在Hadoop上发布度量的属性</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>log4j.properties</td>\n" +
        "        <td>java属性</td>\n" +
        "        <td><em>系统日志文件、namenode 审计日志、任务JVM 进程</em>的任务日志的属性</td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "        <td>hadoop-policy.xml</td>\n" +
        "        <td>Hadoop配置XML</td>\n" +
        "        <td>安全模式下运行Hadoop时的访问控制列表的配置项</td>\n" +
        "    </tr>\n" +
        "    </tbody>\n" +
        "</table>\n" +
        "<p>各个文件中要设置的内容：</p>\n" +
        "<ol>\n" +
        "    <li><code>hadoop-env.sh</code></li>\n" +
        "</ol>\n" +
        "<pre><code class=\"language-sh\">export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64    # 你的jdk安装路径</code></pre>\n" +
        "<ol start=\"2\">\n" +
        "    <li><code>core-site.xml</code></li>\n" +
        "</ol>\n" +
        "<pre><code class=\"language-xml\">&lt;configuration&gt;\n" +
        "    &lt;!-- 用于设置Hadoop的文件系统，由URI指定 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;fs.defaultFS&lt;/name&gt;\n" +
        "        &lt;!-- 用于指定namenode地址在hadoop-master机器上 --&gt;\n" +
        "        &lt;value&gt;hdfs://hadoop-master:9000/&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "&lt;/configuration&gt;</code></pre>\n" +
        "<ol start=\"3\">\n" +
        "    <li><code>hdfs-site.xml</code></li>\n" +
        "</ol>\n" +
        "<pre><code class=\"language-xml\">&lt;configuration&gt;\n" +
        "    &lt;!-- namenode存储永久性的元数据的目录列表 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;dfs.namenode.name.dir&lt;/name&gt;\n" +
        "        &lt;value&gt;file:///root/hdfs/namenode&lt;/value&gt;\n" +
        "        &lt;description&gt;NameNode directory for namespace and transaction logs storage.&lt;/description&gt;\n" +
        "    &lt;/property&gt;\n" +
        "    &lt;!-- datanode存放数据块的目录列表 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;dfs.datanode.data.dir&lt;/name&gt;\n" +
        "        &lt;value&gt;file:///root/hdfs/datanode&lt;/value&gt;\n" +
        "        &lt;description&gt;DataNode directory&lt;/description&gt;\n" +
        "    &lt;/property&gt;\n" +
        "    &lt;!-- 指定HDFS副本的数量 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;dfs.replication&lt;/name&gt;\n" +
        "        &lt;value&gt;2&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "    &lt;!-- 是否使用数据节点主机名连接数据节点 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;dfs.client.use.datanode.hostname&lt;/name&gt;\n" +
        "        &lt;value&gt;true&lt;/value&gt;\n" +
        "        &lt;description&gt;Whether clients should use datanode hostnames when\n" +
        "            connecting to datanodes.\n" +
        "        &lt;/description&gt;\n" +
        "    &lt;/property&gt;\n" +
        "&lt;/configuration&gt;</code></pre>\n" +
        "<ol start=\"4\">\n" +
        "    <li><code>mapred-site.xml</code></li>\n" +
        "</ol>\n" +
        "<pre><code class=\"language-xml\">&lt;configuration&gt;\n" +
        "    &lt;!-- 指定MapReduce运行时框架，这里指定在yarn上，默认是local --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;mapreduce.framework.name&lt;/name&gt;\n" +
        "        &lt;value&gt;yarn&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "&lt;/configuration&gt;</code></pre>\n" +
        "<ol start=\"5\">\n" +
        "    <li><code>yarn-site.xml</code></li>\n" +
        "</ol>\n" +
        "<pre><code class=\"language-xml\">&lt;configuration&gt;\n" +
        "    &lt;!-- 节点管理器运行的附加服务列表 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;\n" +
        "        &lt;value&gt;mapreduce_shuffle&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "    &lt;!-- 使用一个内建的AuxiliairyService:org.apache.hadoop.mapred.ShuffleHandler --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;yarn.nodemanager.aux-services.mapreduce_shuffle.class&lt;/name&gt;\n" +
        "        &lt;value&gt;org.apache.hadoop.mapred.ShuffleHandler&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "    &lt;!-- 指定Yarn集群的管理者（ResourceManager）的地址 --&gt;\n" +
        "    &lt;property&gt;\n" +
        "        &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;\n" +
        "        &lt;value&gt;hadoop-master&lt;/value&gt;\n" +
        "    &lt;/property&gt;\n" +
        "&lt;/configuration&gt;</code></pre>\n" +
        "<ol start=\"6\">\n" +
        "    <li><code>slaves</code>文件记录Hadoop集群所有从节点（<code>HDFS</code>的<code>DataNode</code>和<code>YARN</code>的<code>NodeManager</code>所在主机）的主机名</li>\n" +
        "</ol>\n" +
        "<pre><code>hadoop-slave1\n" +
        "hadoop-slave2</code></pre>\n" +
        "<p>这些配置文件我已经准备好了，在构建镜像时COPY进去即可。</p>\n" +
        "<pre><code class=\"language-dockerfile\">COPY config/* /tmp/</code></pre>\n" +
        "<h2>2.5 分发文件，赋予.sh文件执行权限</h2>\n" +
        "<pre><code class=\"language-dockerfile\"># 分发文件\n" +
        "RUN mv /tmp/ssh_config ~/.ssh/config &amp;&amp; \\\n" +
        "    mv /tmp/sshd_config /etc/ssh/ &amp;&amp; \\\n" +
        "    mv /tmp/hadoop-env.sh /usr/local/hadoop/etc/hadoop/hadoop-env.sh &amp;&amp; \\\n" +
        "    mv /tmp/hdfs-site.xml $HADOOP_HOME/etc/hadoop/hdfs-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/core-site.xml $HADOOP_HOME/etc/hadoop/core-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/mapred-site.xml $HADOOP_HOME/etc/hadoop/mapred-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/yarn-site.xml $HADOOP_HOME/etc/hadoop/yarn-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/slaves $HADOOP_HOME/etc/hadoop/slaves &amp;&amp; \\\n" +
        "    mv /tmp/start-hadoop.sh ~/start-hadoop.sh &amp;&amp; \\\n" +
        "    mv /tmp/run-wordcount.sh ~/run-wordcount.sh\n" +
        "\n" +
        "# 赋予.sh文件执行权限\n" +
        "RUN chmod +x ~/start-hadoop.sh &amp;&amp; \\\n" +
        "    chmod +x ~/run-wordcount.sh &amp;&amp; \\\n" +
        "    chmod +x $HADOOP_HOME/sbin/start-dfs.sh &amp;&amp; \\\n" +
        "    chmod +x $HADOOP_HOME/sbin/start-yarn.sh</code></pre>\n" +
        "<h2>2.6 format namenode</h2>\n" +
        "<p>在hadoop部署好了之后是不能马上应用的，而是对配置的文件系统进行格式化。这里的文件系统，在物理上还未存在，或者用网络磁盘来描述更加合适；还有格式化，并不是传统意义上的磁盘清理，而是一些清除与准备工作。</p>\n" +
        "<p>namemode是hdfs系统中的管理者，它负责管理文件系统的命名空间，维护文件系统的文件树以及所有的文件和目录的元数据，元数据的格式如下：</p>\n" +
        "<p><img src=\"https://www.kevinhwang.cn/wp-content/uploads/2023/03/post-1776-64258c480aa0d.\" alt=\"img\" /></p>\n" +
        "<p>同时为了保证操作的可靠性，还引入了操作日志，所以，namenode会持久化这些数据到本地。对于第一次使用HDFS时，需要执行-format命令才能正常使用namenode节点。</p>\n" +
        "<pre><code class=\"language-dockerfile\"># format namenode\n" +
        "RUN /usr/local/hadoop/bin/hdfs namenode -format</code></pre>\n" +
        "<h2>2.7 设置用户密码，启动ssh</h2>\n" +
        "<pre><code class=\"language-dockerfile\"># change password\n" +
        "RUN echo &quot;root:root123&quot; | chpasswd\n" +
        "# start ssh\n" +
        "CMD [ &quot;sh&quot;, &quot;-c&quot;, &quot;service ssh start; bash&quot;]</code></pre>\n" +
        "<h2>2.8 完整Dockerfile</h2>\n" +
        "<pre><code class=\"language-dockerfile\">FROM ubuntu:20.04\n" +
        "\n" +
        "WORKDIR /root\n" +
        "\n" +
        "# install openssh-server, openjdk and wget\n" +
        "RUN apt-get update &amp;&amp; apt-get install -y openssh-server openjdk-8-jdk wget vim iputils-ping\n" +
        "\n" +
        "# install hadoop 2.10.2\n" +
        "RUN wget https://dlcdn.apache.org/hadoop/common/hadoop-2.10.2/hadoop-2.10.2.tar.gz &amp;&amp; \\\n" +
        "    tar -xzvf hadoop-2.10.2.tar.gz &amp;&amp; \\\n" +
        "    mv hadoop-2.10.2 /usr/local/hadoop &amp;&amp; \\\n" +
        "    rm hadoop-2.10.2.tar.gz\n" +
        "\n" +
        "# set environment variable\n" +
        "ENV JAVA_HOME=/usr/lib/jvm/java-8-openjdk-arm64\n" +
        "ENV HADOOP_HOME=/usr/local/hadoop\n" +
        "ENV PATH=$PATH:/usr/local/hadoop/bin:/usr/local/hadoop/sbin\n" +
        "\n" +
        "# ssh without key\n" +
        "RUN ssh-keygen -t rsa -f ~/.ssh/id_rsa -P &#039;&#039; &amp;&amp; \\\n" +
        "    cat ~/.ssh/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys\n" +
        "\n" +
        "RUN mkdir -p ~/hdfs/namenode &amp;&amp; \\\n" +
        "    mkdir -p ~/hdfs/datanode &amp;&amp; \\\n" +
        "    mkdir $HADOOP_HOME/logs\n" +
        "\n" +
        "COPY config/* /tmp/\n" +
        "\n" +
        "RUN mv /tmp/ssh_config ~/.ssh/config &amp;&amp; \\\n" +
        "    mv /tmp/sshd_config /etc/ssh/ &amp;&amp; \\\n" +
        "    mv /tmp/hadoop-env.sh /usr/local/hadoop/etc/hadoop/hadoop-env.sh &amp;&amp; \\\n" +
        "    mv /tmp/hdfs-site.xml $HADOOP_HOME/etc/hadoop/hdfs-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/core-site.xml $HADOOP_HOME/etc/hadoop/core-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/mapred-site.xml $HADOOP_HOME/etc/hadoop/mapred-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/yarn-site.xml $HADOOP_HOME/etc/hadoop/yarn-site.xml &amp;&amp; \\\n" +
        "    mv /tmp/slaves $HADOOP_HOME/etc/hadoop/slaves &amp;&amp; \\\n" +
        "    mv /tmp/start-hadoop.sh ~/start-hadoop.sh &amp;&amp; \\\n" +
        "    mv /tmp/run-wordcount.sh ~/run-wordcount.sh\n" +
        "\n" +
        "RUN chmod +x ~/start-hadoop.sh &amp;&amp; \\\n" +
        "    chmod +x ~/run-wordcount.sh &amp;&amp; \\\n" +
        "    chmod +x $HADOOP_HOME/sbin/start-dfs.sh &amp;&amp; \\\n" +
        "    chmod +x $HADOOP_HOME/sbin/start-yarn.sh\n" +
        "\n" +
        "# format namenode\n" +
        "RUN /usr/local/hadoop/bin/hdfs namenode -format\n" +
        "\n" +
        "# change password\n" +
        "RUN echo &quot;root:password&quot; | chpasswd\n" +
        "\n" +
        "# start ssh\n" +
        "CMD [ &quot;sh&quot;, &quot;-c&quot;, &quot;service ssh start; bash&quot;]</code></pre>\n" +
        "<h1>3.搭建Hadoop集群</h1>\n" +
        "<h2>3.1. 拉取 Docker 镜像</h2>\n" +
        "<pre><code class=\"language-bash\">sudo docker pull kalyanhuang/hadoop-2.10.2</code></pre>\n" +
        "<h2>3.2. 克隆 github 仓库</h2>\n" +
        "<pre><code class=\"language-bash\">git clone https://github.com/2292384454/hadoop-cluster-docker</code></pre>\n" +
        "<h2>3.3. 使用docker网桥创建 hadoop 网络</h2>\n" +
        "<pre><code class=\"language-bash\">sudo docker network create --driver=bridge hadoop</code></pre>\n" +
        "<blockquote>\n" +
        "    <p>如果你的环境是 MacOS，你可能需要阅读 <a href=\"install-docker-connector.md\">!install-docker-connector.md</a>并按照里面的方法安装<code>docker-connector</code>，以让你可以在宿主机中访问容器网络。</p>\n" +
        "</blockquote>\n" +
        "<h2>3.4. 启动 docker 容器</h2>\n" +
        "<pre><code class=\"language-bash\">cd hadoop-cluster-docker\n" +
        "sudo ./start-container.sh</code></pre>\n" +
        "<p><strong>output:</strong></p>\n" +
        "<pre><code class=\"language-bash\">start hadoop-master container...\n" +
        "start hadoop-slave1 container...\n" +
        "start hadoop-slave2 container...</code></pre>\n" +
        "<ul>\n" +
        "    <li>这一步将启动三个容器，其中一个是主节点另外两个是从节点。</li>\n" +
        "    <li>默认工作目录是主节点的<code>/root</code>目录</li>\n" +
        "</ul>\n" +
        "<h2>3.5. 启动 hadoop</h2>\n" +
        "<pre><code class=\"language-bash\">./start-hadoop.sh</code></pre>\n" +
        "<h2>3.6. 运行 wordcount 任务</h2>\n" +
        "<pre><code class=\"language-bash\">./run-wordcount.sh</code></pre>\n" +
        "<p>这是一个简单的mapreduce任务，可以用来检测是否成功启动了hadoop。</p>\n" +
        "<p><strong>output:</strong></p>\n" +
        "<pre><code class=\"language-bash\">input file1.txt:\n" +
        "Hello Hadoop\n" +
        "\n" +
        "input file2.txt:\n" +
        "Hello Docker\n" +
        "\n" +
        "wordcount output:\n" +
        "Docker    1\n" +
        "Hadoop    1\n" +
        "Hello    2</code></pre>\n" +
        "<h1>4. 自定义Hadoop集群的节点数</h1>\n" +
        "<h2>4.1. 拉取 docker 镜像并克隆 github 仓库</h2>\n" +
        "<p>完成<code>3.1.</code>到<code>3.3.</code>步骤</p>\n" +
        "<h2>4.2. 重建docker镜像</h2>\n" +
        "<pre><code>sudo ./resize-cluster.sh 5</code></pre>\n" +
        "<ul>\n" +
        "    <li>输入参数<code>N</code>必须大于1。</li>\n" +
        "    <li>这个脚本将重写 slaves文件（见 2.4 ），为你的<code>N</code>个hadoop节点命名为<code>hadoop-slave1</code>,<code>...</code>,<code>hadoop-slaveN</code>，然后用其重新构建docker镜像。</li>\n" +
        "</ul>\n" +
        "<h2>4.3. 启动docker容器</h2>\n" +
        "<pre><code>sudo ./start-container.sh 5</code></pre>\n" +
        "<ul>\n" +
        "    <li>输入参数N应当与 4.2. 中选择的参数保持一致。</li>\n" +
        "</ul>\n" +
        "<h2>4.4. 启动hadoop集群</h2>\n" +
        "<p>完成<code>3.5.</code> 到<code>3.6.</code> 步骤。</p>"
})