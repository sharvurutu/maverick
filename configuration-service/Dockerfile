FROM openjdk
EXPOSE 8083
WORKDIR target/
ADD target/configuration-service-1.0.jar target/configg.jar
RUN sh -c 'touch configg.jar'
ENTRYPOINT ["java", "-jar","target/configg.jar"]
