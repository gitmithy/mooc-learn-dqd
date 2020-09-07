使用需要注意：

**Jenkins中Docker没有权限：**

[Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock](https://stackoverflow.com/questions/47854463/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-uni)

 

**方法一：**

对于jenkins安装在宿主机上的，docker也安装在宿主机而非docker中

```bash
sudo usermod -a -G docker jenkins
```

 

**方法二：**

使用user的方式指定

```bash
grep docker /etc/group 
# GID

docker run -p 8080:8080 -p 50000:50000 -d -u jenkins:GID --name jenkins/jenkins
```

**参考：**

- https://forums.docker.com/t/docker-not-found-in-jenkins-pipeline/31683/8
- https://stackoverflow.com/questions/47854463/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-uni
- https://stackoverflow.com/questions/47854463/got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket-at-uni