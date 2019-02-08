FROM java:8
VOLUME /src/temp
ADD target/recommendations-1.0.jar src/GameRecommendationApp.jar
WORKDIR src/
EXPOSE 9095
RUN bash -c 'touch GameRecommendationApp.jar'
ENTRYPOINT ["java","-jar","GameRecommendationApp.jar"]
