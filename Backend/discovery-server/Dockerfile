FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/discovery-docker.jar app.jar
EXPOSE 8761
CMD ["java", "-jar", "app.jar"]
