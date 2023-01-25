## API CONTATOS TELEFONICOS.
Essa API Rest tem como função basica o gerenciamento de contatos de uma agenda.<br>
<br><br>

### TÉCNOLOGIAS E TÉCNICAS UTILIZADAS.
Para desenvolvimento dessa API foram utilizados
<ul>
  <li>Nodejs</li>
  <li>Express</li>
  <li>Postgresql</li>
  <li>ts-node-dev</li>
  <li>typescript</li>
</ul><br>
Para o desenvolvimento forma aplicadas técnicas de desenvolvimento S.O.L.I.D e arquitetura Package by feature.

### DESAFIOS 
Durante o desenvolvimento da API em questão o principal desafio foi sem duvida entender o conseito de S.O.L.I.D e principalmente como aplicar ele em uma aplicação, 
como a aplicação em questão foi criada para que fosse possivel a analise na pratica dos conseitos do solid, foi criado em um primeiro momento a parte de cadastro de um contato, nesse primeiro momento nossa API está arquivando os imformações em Array sendo assim simulando apenas o cadastro do contato.


### PROXIMOS PASSOS.
<ul>
  <li>Adicionar integração com o postgresql
    <p>   Realizar a integração para que possamos iniciar o cadastro das informações no banco.</p>
  </li>
  <li>Criar um modulo para cadastro de fornecedor
  <p>     Criar um modulo que extenda do contato para que possamos realizar o cadastro dos fornecedore.</p>
  </li>
  <li>Criar um modulo para cadastro de Cliente
  <p>     Criar um modulo que extenda do contato para que possamos realizar o cadastro dos cliente.</p>
  </li>
  <li>Criar um modulo para Envio de email
  <p>     Criar um modulo que receba uma lista de contatos e realize o envio de e-mails personalizado.</p>
  </li>
  <li>Criar rotina savar, listar, alterar e deletar registro.</li>
  
</ul>

### DESAFIOS PARA NOVAS FEATURE
Para o restante do api o principal desafil é manter a mesma entre os conceitos de S.O.L.I.D  e Packagebyfeature, manter performance e o principal aplicando regras de seguraça em seus end-point(JWT).<br><br>
