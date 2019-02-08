FROM java:8

VOLUME /tmp

RUN mkdir usr/work

WORKDIR usr/work

ADD target/login-1.0.jar usr/work/authentication.jar

EXPOSE 9097

COPY . .

RUN bash -c 'touch usr/work/authentication.jar'

CMD ["./run.sh"]
