FROM openjdk
EXPOSE 9096
WORKDIR target/
ADD target/SearchService-1.0.jar target/search.jar
RUN sh -c 'touch target/search.jar'
ENTRYPOINT ["java", "-jar","target/search.jar"]
