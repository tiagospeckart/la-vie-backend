SELECT * FROM psicologos;
INSERT INTO psicologos VALUES
	(NULL, 'Foo', 'foo@bar.com', 'j49er3hd2929dhsdfhh9fh29fh3', 'Lorem ipsum'),
    (NULL, 'Foo', 'foo@bar.com', 'j49er3hd2929dhsdfhh9fh29fh3', 'Lorem ipsum');

SELECT * FROM pacientes;
INSERT INTO pacientes(id_pacientes, nome_pac, email_pac, idade) VALUES
	(NULL, 'Bar', 'foo@bar.com', '1900-01-01'), 
    (NULL, 'Bar', 'foo@bar.com', '1900-01-01');

SELECT * FROM atendimentos;
INSERT INTO atendimentos(id, pacientes_id, data_atendimento, observacao, psicologos_id_psicologos) VALUES
	(NULL, 11, '1900-01-01', 'Lorem ipsum', 6);