FROM java:8
VOLUME /src/temp
ADD target/AdaptiveGameEngine-1.0.jar src/AdaptiveGameEngineApp.jar
EXPOSE 9094
WORKDIR src/
RUN bash -c 'touch appAdaptiveGameEngineApp.jar'
ENTRYPOINT ["java","-jar","AdaptiveGameEngineApp.jar"]
