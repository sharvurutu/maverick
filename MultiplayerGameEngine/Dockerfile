FROM java:8
VOLUME /tmp
ADD target/MultiplayerGameEngine-1.0.jar target/app.jar
EXPOSE 9093
RUN bash -c 'touch /app.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","target/app.jar"]
