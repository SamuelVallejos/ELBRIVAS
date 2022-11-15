-- Generado por Oracle SQL Developer Data Modeler 22.2.0.165.1149
--   en:        2022-09-12 00:06:23 CLST
--   sitio:      Oracle Database 11g
--   tipo:      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE recorrido (
    id       NUMBER NOT NULL,
    comuna   VARCHAR2(200) NOT NULL,
    viaje_id NUMBER NOT NULL
);

CREATE UNIQUE INDEX recorrido__idx ON
    recorrido (
        viaje_id
    ASC );

ALTER TABLE recorrido ADD CONSTRAINT recorrido_pk PRIMARY KEY ( id );

CREATE TABLE usuario (
    nombre     VARCHAR2(200) NOT NULL,
    correo     VARCHAR2(100) NOT NULL,
    telefono   NUMBER NOT NULL,
    contrasena VARCHAR2(15) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( correo );

CREATE TABLE vehiculo (
    patente        VARCHAR2(6) NOT NULL,
    marca          VARCHAR2(30) NOT NULL,
    modelo         BLOB NOT NULL,
    ano            DATE NOT NULL,
    asientos       NUMBER NOT NULL,
    color          VARCHAR2(20) NOT NULL,
    usuario_correo VARCHAR2(100)
);

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY ( patente );

CREATE TABLE viaje (
    id               NUMBER NOT NULL,
    tiempo           NUMBER NOT NULL,
    tarifa           NUMBER NOT NULL,
    recorrido_id     NUMBER NOT NULL,
    vehiculo_patente VARCHAR2(6)
);

CREATE UNIQUE INDEX viaje__idx ON
    viaje (
        recorrido_id
    ASC );

ALTER TABLE viaje ADD CONSTRAINT viaje_pk PRIMARY KEY ( id );

ALTER TABLE recorrido
    ADD CONSTRAINT recorrido_viaje_fk FOREIGN KEY ( viaje_id )
        REFERENCES viaje ( id );

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_usuario_fk FOREIGN KEY ( usuario_correo )
        REFERENCES usuario ( correo );

ALTER TABLE viaje
    ADD CONSTRAINT viaje_recorrido_fk FOREIGN KEY ( recorrido_id )
        REFERENCES recorrido ( id );

ALTER TABLE viaje
    ADD CONSTRAINT viaje_vehiculo_fk FOREIGN KEY ( vehiculo_patente )
        REFERENCES vehiculo ( patente );



-- Informe de Resumen de Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                             4
-- CREATE INDEX                             2
-- ALTER TABLE                              8
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
