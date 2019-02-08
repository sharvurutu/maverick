FROM openjdk
VOLUME /tmp
WORKDIR usr/gamemanager
ADD ./target/GameManager-1.0.jar /usr/gamemanager.jar
RUN ls /usr/gamemanager
EXPOSE 9091
RUN bash -c 'touch /usr/gamemanager.jar'
ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://localhost/gamemanagerdb", "-jar","/usr/gamemanager.jar"]
