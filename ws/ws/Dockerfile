FROM openjdk:17
LABEL mainteiner="javaguides.net"
ADD target/ws-0.0.1-SNAPSHOT.jar epocket-docker.jar
ENTRYPOINT ["java","-jar","epocket-docker.jar"]
