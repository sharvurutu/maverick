FROM java:8
RUN mkdir /src
WORKDIR src/project
ADD target/game-1.0.jar src/project/game-engine-app.jar
EXPOSE 9092
RUN bash -c 'touch src/project/game-engine-app.jar'
ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://localhost/GameQuestionDb", "-jar", "src/project/game-engine-app.jar"]
