--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

-- Started on 2018-01-21 10:54:39

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

-- DROP DATABASE ex1_webpack;
--
-- TOC entry 2798 (class 1262 OID 16393)
-- Name: ex1_webpack; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE ex1_webpack WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


ALTER DATABASE ex1_webpack OWNER TO postgres;

\connect ex1_webpack

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12924)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2801 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16405)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    user_id integer NOT NULL,
    user_name character varying(100),
    user_age integer
);


ALTER TABLE users OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16403)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_user_id_seq OWNER TO postgres;

--
-- TOC entry 2802 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_user_id_seq OWNED BY users.user_id;


--
-- TOC entry 2670 (class 2604 OID 16408)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN user_id SET DEFAULT nextval('users_user_id_seq'::regclass);


--
-- TOC entry 2793 (class 0 OID 16405)
-- Dependencies: 197
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO users (user_id, user_name, user_age) VALUES (1, 'Bread Aviadough', 19);
INSERT INTO users (user_id, user_name, user_age) VALUES (2, 'Essy Pasol', 21);
INSERT INTO users (user_id, user_name, user_age) VALUES (3, 'Kekna Tiyoko', 17);
INSERT INTO users (user_id, user_name, user_age) VALUES (4, 'Maxx Nakendi', 25);
INSERT INTO users (user_id, user_name, user_age) VALUES (5, 'Karen Kare', 12);
INSERT INTO users (user_id, user_name, user_age) VALUES (6, 'Caldy Reta', 24);


--
-- TOC entry 2803 (class 0 OID 0)
-- Dependencies: 196
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_user_id_seq', 6, true);


--
-- TOC entry 2800 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2018-01-21 10:54:40

--
-- PostgreSQL database dump complete
--

