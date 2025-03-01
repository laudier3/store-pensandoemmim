import React from 'react'
import XMLViewer from 'react-xml-viewer'
//import xml from "./feed.xml"

const xml = `
 <?xml version="1.0" encoding="UTF-8"?>
<Product>
  <DATA_RECORD>
    <id>82492cf3-fff7-4f15-8996-84b32ffe2cf7</id>
    <name>Computador Pc DELL intel core I3 8gb HD 500 gb monitor 19 acompanha teclado mouse e cabos</name>
    <bar_code>12</bar_code>
    <price>1800</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt5uwwoyimuq79,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt5uwwqcgldr8f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt183i6b4qvh18,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lovkkdjmpk5x73,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lita3ce9yxpx24}</image>
    <size>{Padrão,"","","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{computador,"kit pc","kit computador i3 8GB","computador com i3","computador montado",computador}</slug>
    <description>Marca Hewlett Packard Portas/ Interface eSATA, Ethernet LAN, PCI-e, PS/2, USB 2.0 Tipo de Garantia Garantia do Fornecedor Especializado em Jogos Não Capacidade de Armazenamento 2TB Unidade de Disco Óptico Sim Sistema Operacional Windows Condição Novo Duração da Garantia 6 Meses Tipo de Armazenamento Suporta Hd e hd ssd Frequência da CPU 3Ghz Tipo de Processador Core duo 3.0 Peso do Produto 13kg Número do Processador Core duo Quantidade 1 Tamanho Do Pacote 15KG Nome do Modelo Hp / dell Nr de Homologação 1236 Fabricante hp Estoque 433 Enviado de São Paulo Descrição Do Produto Seja muito bem-vindo á ayresinfo Computadores!!!!!!!! Com excelência e experiência em informática, criamos soluções completas na área de informática. Nossos computadores são equipados com os mais recentes processadores de alta velocidade, maximizando sua produção e atendendo as necessidades de nossos clientes. Emitimos nota fiscal ( pessoa física ou jurídica ) Temos aqui para oferecer uma bela opção em KIT computador HP INTEL  completo com monitor Fiquem à vontade em perguntar.</description>
    <quantity>150</quantity>
    <url_product>https://shopee.com.br/Computador-Pc-DELL-intel-core-I3-8gb-HD-500-gb-monitor-19-acompanha-teclado-mouse-e-cabos-i.684090667.10793942033?sp_atk=8aab9e29-76a5-40fa-a101-907f4c4739fd&amp;xptdk=8aab9e29-76a5-40fa-a101-907f4c4739fd</url_product>
    <created_at>2024-08-06 03:23:02.698</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>f11905a1-eefd-4429-aea7-70c85fcb839e</id>
    <name>Calça Jeans Flare Boca De Sino Feminina Cós Alto Com Lycra Elastano Tendência</name>
    <bar_code>1</bar_code>
    <price>120</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5uf2w4lnj9s0d@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5uf2w4lm4pcc9@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5uf2w4lkq4w8e@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2jn1czj2bpyd2@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx1643cupoc699@resize_w450_nl.webp,https://down-aka-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6jrno-lip0p2vvtvlh2a.16000051688246490.mp4}</image>
    <size>{36,38,40,42,44}</size>
    <color>{PRETA,"Jeans escuro","Jeans claro",Marmorizada,stone}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo3zkgihm6rwc1@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnnm4f3u37wvc4@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2jn1czj2bpyd2@resize_w450_nl.webp,"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx1643cupoc699@resize_w450_nl.webp ",https://down-br.img.susercontent.com/file/br-11134207-7r98o-m5uf2w4lnj9s0d@resize_w450_nl.webp}</slug>
    <description>Sabe aquele jeans que veste tão bem, que se encaixa perfeitamente ao corpo? As calças da Stronger Jeans são exatamente assim, tem uma modelagem especialmente feita para agradar todas as mulheres, com acabamento impecável e jeans de qualidade!   Nosso modelo levanta bumbum, foi feito para valorizar suas curvas, deixando o bumbum empinadinho, compre sem medo, você vai amar!!!!  Fabricamos jeans de qualidade a mais de 8 anos e temos tudo a pronta entrega!!!! Nossas calças tem bastante elastano (Lycra), para ajustar perfeitamente ao seu corpo.  TROCAS E DEVOLUÇÕES: você tem prazo de 7 dias após a entrega para fazer troca ou devolução.  TEM DÚVIDAS? Tire todas as dúvidas, para que tenha uma ótima experiência de compra.... Nós responderemos o mais breve possível!!!  Porque comprar nossas calças? *Oferecemos peças de qualidade, com preço exelente *Você vai estar comprando direto de fábrica *Satisfação garantida, queremos vender pra você SEMPRE!!!   O tamanho das peças seguem as medidas de nossa Tabela de Medidas: TAM 36  QUADRIL 96-100 CM  CINTURA 72-78 CM  COMPRIMENTO 109 CM TAM 38  QUADRIL 101-105 CM  CINTURA 78-82 CM  COMPRIMENTO 111 CM TAM 40  QUADRIL 106-110 CM  CINTURA 82-86 CM  COMPRIMENTO 112 CM TAM 42  QUADRIL  111-115 CM  CINTURA 86-90 CM  COMPRIMENTO 113 CM TAM 44  QUADRIL  116-120 CM CINTURA 90-95 CM COMPRIMENTO 115 CM  *** TEXTO PROTEGIDO PELA LEI DE DIREITOS AUTORAIS 9610/98***</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/625838592/22222737621?uls_trackid=4vt4qvc600mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b7vz5amu4p1d</url_product>
    <created_at>2024-05-30 01:23:37.641</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>286a8b7b-9524-4f26-801b-e2d470496664</id>
    <name>S10 Fone De Ouvido Sem Fio Mini Bluetooth Mãos-Livres Estéreo À Prova D'água Com</name>
    <bar_code>5</bar_code>
    <price>28</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rbm1-lldbd5bvi4d973,https://down-br.img.susercontent.com/file/sg-11134201-7rblr-lldbd5l14qeke5,https://down-br.img.susercontent.com/file/sg-11134201-7rbne-lldbd5ugqx7fbf,https://down-br.img.susercontent.com/file/sg-11134201-7rbk2-lldbd62igjod28,https://down-br.img.susercontent.com/file/sg-11134201-7rblv-lldbd6dlywm388,https://down-cvs-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkp-lsvemdhk4jkd50.default.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{"Fone sem fio","Fone bloetooth","fone wireles",fone,"fone hadset"}</slug>
    <description>Tipo de Conexão Sem fio Tipo de Fone de Ouvido, Headphone e Headset Intra Auricular Especializado em Jogos Não Compatibilidade do Áudio Celular, Computador e Notebook Fones de ouvido, Headphones e Acessórios de Headsets Microfone Embutido, Resistente a Suor Tipo de Conexão do Headphone Bluetooth Nome do Modelo HK-L Nr de Homologação 102242214013 Fabricante Hexin Chuang Electronics (Shenzhen) Co., Estoque 3091 Enviado de China Continental Descrição Do Produto 🌟Bem-vindo ao valor da escolha🌟  ✅ Concentre-se em produtos autênticos, forneça melhores preços e serviços!  ✅ Compras em uma única parada! Nossa loja cobre várias categorias, incluindo moda, casa, decoração, roupas, produtos eletrônicos.  ✅ Serviço ON-LINE. Se você tiver algum problema ou dúvida, entre em contato primeiro! Nós lhe ofereceremos uma experiência de compra maravilhosa.     Características:  1. Toda vez que o fone de ouvido Bluetooth é conectado ao telefone móvel, o HeadSet Bluetooth irá Conectar automaticamente de volta ao telefone celular depois de ligar NED, o que é conveniente e rápido.  2. Compatibilidade SMART: Suporta todos os telefones celulares habilitados para bluetooth, Tablets, Notebooks, CANTO, MOSIC, Filmes, ETC.   Bluetooth 5.2  4. Renomeação GPS pelo sistema GPS, posicionamento GPS  5. Controle de toque  6. Desligamento/desligamento automático de energia automática  7. Música anterior, música anterior, próxima música    O conteúdo da embalagem inclui:  Fone de ouvido único direito direito  Cabo de carregamento de carregamento  Manual do usuário do usuário    🙌 Notas de Aviso:  1. Não use carregador de rosto para carregar o fone de ouvido!  2. Adaptador de carregamento 5V 2A ou 5V 1A para carregar o fone de ouvido!  3. Fone de ouvido único direito.    Garantia de qualidade do produto  1. O teste de qualidade do armazém será realizado antes que o produto seja enviado do armazém  2. Se você encontrar problemas de qualidade após o recebimento de um produto, entre em contato conosco primeiro.    🎉Siga-nos para obter mais cupom e desconto futuro!  🎉Qualquer dúvida e conselho, entre em contato!   ♥Aproveite suas compras♥</description>
    <quantity>100</quantity>
    <url_product>https://shopee.com.br/S10-Fone-De-Ouvido-Sem-Fio-Mini-Bluetooth-M%C3%A3os-Livres-Est%C3%A9reo-%C3%80-Prova-D'%C3%A1gua-Com-i.230709939.22097005449?publish_id=&amp;sp_atk=820a8930-8ff2-495b-9291-32c3c56a4e4f&amp;xptdk=820a8930-8ff2-495b-9291-32c3c56a4e4f&amp;is_from_login=true</url_product>
    <created_at>2024-05-31 02:52:58.074</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>3dbc5d16-53ba-4db0-aae8-4296c2b481f1</id>
    <name>Vestido Feminino Envelope Curto Casual Sem Bojo Com Várias Formas de Amarração</name>
    <bar_code>3</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt3vdihqy9u77f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt3vdihqitkvbf,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt3vdihqya7ma9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt3vdihqy9tr10,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt3vdihqitlb2c,""}</image>
    <size>{"38 ao 44 Unico","",""}</size>
    <color>{preto,lilais,rosa,roxo,azul}</color>
    <slug>{vestido,"vestido soltinho","vestido para verão","vestido elegante ","vestido para o calor"}</slug>
    <description>1 Vestido Feminino Envelope Curto Casual Sem Bojo Com Várias Formas de Amarração  Nossa peça confeccionada em tamanho único,  veste do 38 ao 44 peças com várias formas de amarração nas costas, te deixando mais linda e com um toque sensual.   O vestido envelope é muito mais do que uma simples peça de roupa; é uma declaração de estilo que transcende as tendências passageiras, oferecendo uma combinação perfeita de elegância clássica e modernidade.  Descubra a variedade de estilos disponíveis, desde os vestidos envelope perfeitos para um passeio descontraído durante o dia, até os modelos que adicionam um toque de glamour a eventos noturnos e ocasiões formais.  Seja você uma apaixonada por moda em busca de uma peça clássica para o seu guarda-roupa ou uma entusiasta da sustentabilidade em busca de uma opção elegante e consciente, nosso marketplace é o seu destino definitivo para encontrar o vestido envelope dos seus sonhos.  Envio Imediato</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/388315656/23592836061?uls_trackid=4vta3m3201mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b7zsyy6fogp8</url_product>
    <created_at>2024-05-30 16:49:26.998</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>9c31cba8-302b-4d5d-8da5-13ab64a04c8a</id>
    <name>KIT lili creme e perfume acetinado corpo e mãos hidratante lily lulli</name>
    <bar_code>8</bar_code>
    <price>96</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13e0gbi3eb,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13dzzgore6,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13e0nccbbb,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13e0j4mz2c,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13e07w3f90,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Dourado,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsxf13e0gbi3eb,"kit oboticario","kiti lili","kiti perfume e creme",lili}</slug>
    <description>Marca 3M Estoque 1231 Enviado de São Paulo Descrição Do Produto Descubra mais sobre  Kit Presente L'eau de Lily (2 itens) O Kit Presente L'eau de Lily oferece itens de perfumaria e cuidados corporais para deixar tudo mais especial. Além disso, o kit vem em uma Caixa para Presente montada para se tornar inesquecível:    L´EAU DE LILY  ﻿  L'eau de Lily Desodorante Colônia traz uma fragrância sofisticada mais fresca que transborda feminilidade, com um toque de delicadeza em uma assinatura floral e marcante. Ideal para usar todos os dias e sentir as facetas da família olfativa Floral na pele.     CREME ACETINADO     O Creme Acetinado Hidratante Desodorante Corporal Lily é composto por Manteiga de Karité, que cria uma película protetora e Vitamina E, sua textura aveludada e macia desliza facilmente na pele, trazendo uma hidratação que dura até 48 horas.     CREME HIDRATANTE PARA MÃOS     O Creme Desodorante Hidratante para Mãos Lily oferece um cuidado especial para a pele das mãos com a mesma fragrância do Lily Eau de Parfum. Garante hidratação perfumada e intensa por até 48 horas. Não danifica ou tira o brilho do esmalte e não deixa a pele oleosa nem pegajosa</description>
    <quantity>300</quantity>
    <url_product>https://shopee.com.br/KIT-lili-creme-e-perfume-acetinado-corpo-e-m%C3%A3os-hidratante-lily-lulli-i.724168603.18999215885?publish_id=&amp;sp_atk=7d99c303-6161-4260-8e34-419ffaae0a3f&amp;xptdk=7d99c303-6161-4260-8e34-419ffaae0a3f</url_product>
    <created_at>2024-05-31 01:33:35.545</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>a354db3f-ec18-40c6-94e2-d275484b632c</id>
    <name>Bolsa SL Tiracolo Atacarejo Bolsinha Feminina de Ombro</name>
    <bar_code>15</bar_code>
    <price>72</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslgh0j7h4xn2d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m0wdfx33,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m0uyvh05,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m10l5932,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m0tkb1a5,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-lslgky6q6lgk6a.16000081709823471.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Branco,Preto,Dourado,Roxo,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m0uyvh05,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m0wdfx33,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslgh0j7h4xn2d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lslge6m10l5932,"Bolsa Branca"}</slug>
    <description>Marca Santa Lolla Tipo de Couro Outros Acabamento do Couro Fosco Estampa Floral, Xadrez / Quadriculada, Listrada Conjunto de bolsas Não Tipo de Garantia Garantia do Fornecedor País de Origem Brasil Estilo da Bolsa Outros Ocasião Casual Estações do ano Verão Material Sintético Tamanho da bolsa Mini Fecho da Bolsa Zíper Quantidade 1000 Estoque 4617 Enviado de Minas Gerais Descrição Do Produto ✅ Bolsa de porte médio com material em resina termoplástica macia com excelente acabamento. Fechamento em zíper e alça de transversal ajustável.   ✅ Vantagens da Bolsa • Material super rígido e resistente, o que facilita a lavagem, água e sabão. Pode esfregar a vontade; • Pequena para melhor comodidade; • 100% de espaço utilizável; • Beleza e simplicidade para o seu look. Combina fácil com qualquer estilo.   ✅ Medida Da Bolsa: • 22,0 cm de Comprimento; • 15,5 cm de Altura; • 8,5 cm de Largura (Espaço Interno Utilizável); • 130 cm de Alça Ajustável.   ✅ Medida Da Bolsa: • 20,0 cm de Comprimento; • 13,0 cm de Altura; • 8,5 cm de Largura (Espaço Interno Utilizável); • 130 cm de Alça Corrente  Qualquer dúvida só entrar em contato com a gente pelo chat!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/Bolsa-SL-Tiracolo-Atacarejo-Bolsinha-Feminina-de-Ombro-i.750817092.23197372709?publish_id=&amp;sp_atk=11afc0c1-ea56-498c-ba42-41d8873cb2d7&amp;xptdk=11afc0c1-ea56-498c-ba42-41d8873cb2d7</url_product>
    <created_at>2024-05-27 23:55:21.400</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>f7bdbd1d-cf6e-49b8-a716-9b1690360388</id>
    <name>Vestido curto corpete colado tomara que caia morcego festa</name>
    <bar_code>3</bar_code>
    <price>88</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr686b9xa9lw6f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr686b9xaa0r8f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr672kzqpz4d00,"",https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr672kzqokjx90,https://cvf.shopee.com.br/file/api/v4/11110107/mms/br-11110107-6kfkr-lr5asno8h3j8bc.16000081706665949.mp4}</image>
    <size>{"unico 36 ao 40","","","",""}</size>
    <color>{preto,vermelho,verde,pinck,"Rosa chiclete"}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr686b9xa9lw6f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr686b9xaa0r8f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr672kzqpz4d00,"",""}</slug>
    <description>Envio Super Rápido  ✅DK Modas  ✅Garantimos com toda certeza cada informações digitada aqui abaixo: VESTIDO CORPETE   ▪ Tecido Suplex ▪ Com Bojo ▪Tamanho ÚNICO veste do 36 ATÉ NO MÁXIMO 40.   ✅Informações do produto:  As fotos são reais do produto, temos vídeo para confirmação. Produto de alta qualidade tecido confortável que se encaixa perfeitamente no seu corpo.   ✅DICAS ▪ ideal para festa/baladas com casaco, blazer, bota,salto,tênis,etc. consegue compor vários looks maravilhosos 🥰✅  ✅Garantia:  Ao receber seu produto se atente e confirmar se não tem nenhum problema, só conclua seu pedido após a conferência, porquê depois de concluir o pedido a não aceita mais devolução/reembolso. as peças são verificadas um por um antes do envio para termos certeza que irá receber em perfeita condições.   ⚠️APROVEITE E COMPRE ALQUER MOMENTO!⚠️  qualquer dúvidaAGORA NOSSO ESTOQUE PODE ESGOTAR A QU fique a vontade de pergunta estaremos a disposição !  BOAS COMPRAS!</description>
    <quantity>200</quantity>
    <url_product>https://shopee.com.br/product/518776879/23997032748?uls_trackid=4vtm0jnc00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b89f5qkfx7hh</url_product>
    <created_at>2024-06-01 03:27:28.619</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>214fdfa4-1d9c-4718-aed6-035ced928526</id>
    <name>Vestido Tomara que Caia Curto Justo</name>
    <bar_code>3</bar_code>
    <price>44</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll9jw1o3km52b5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll9nvcae7fp822,https://down-br.img.susercontent.com/file/br-11134207-7r98q-ll9nvcaea8u4b7,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll9nvcaed1z083,"",""}</image>
    <size>{P,M,G,"",""}</size>
    <color>{preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll9jw1o3km52b5,"vestido tomara que caia ","vestido curto","vestido colado","vestido sexy"}</slug>
    <description>Produtos a pronta entrega para postagem imediata em até 24h ✓ Excelentes preços e ótima qualidade ✓ Fabricação própria ✓ Feito com muito carinho e capricho ✓ Mais de 200 mil estrelinhas e avaliações positivas ✓ Você não vai se arrepender de ter escolhido a Moderna &amp; Slim! Compre e arrase!  Vestido Tomara que Caia Feminino  Vestido de comprimento curto, confeccionado em tecido suplex, possui decote tomara que caia que ajuda no ajuste do busto.  Medidas: Tamanho P -  Comprimento: 77 cm - Largura: 36 cm (veste 36) Tamanho M - Comprimento: 78 cm - Largura: 38 cm  (veste 38) Tamanho G -  Comprimento: 79 cm - Largura: 39 cm (veste 40) *dependendo do biótipo o G veste até o tamanho 42.  A Modelo Veste Tamanho M: Altura 1,73, Busto 88cm, Cintura 70cm, Quadril 90cm, Manequim 38  Material: - Tecido: Suplex - Sem Bojo - Tomara que caia  Fotos dos anúncios: - As fotos e vídeos são reais. As modelos são contratadas pela nossa marca, portanto, as peças retratam fielmente os nossos produtos.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/283972864/22892311413?uls_trackid=4vtqn3sa00mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8ctz1hcqd7n</url_product>
    <created_at>2024-06-01 17:20:05.260</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>495207a7-829f-4dc3-af37-ce9790547c9f</id>
    <name>Kit 2 Pares Sandalia Chinelo Feminina Tamanco Rasteira Birken Massageador Confortavel</name>
    <bar_code>2</bar_code>
    <price>140</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78tu5gnfe,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78twyljb1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78tvk13aa,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78tyd5z68,"",""}</image>
    <size>{34,36,38,40,42}</size>
    <color>{"branco ",preto,"","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78tu5gnfe,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqf4n78twyljb1,"","",""}</slug>
    <description>Salto – 3,0 cm Cor – Sempre seguir a cor original da foto produto. Material – Diversos. Peso -- 300g Solado – Expandido. Palmilha – Macia com aplique da logo. Numeração: será enviada pelo critério de escolha</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/443105265/22597299382?uls_trackid=4vujduus01rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vqn9my1ixw</url_product>
    <created_at>2024-06-04 17:50:08.930</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>6ce49530-1272-45cb-b957-40e830100ad1</id>
    <name>Projetor 4K HD 150 Polegadas Celular, Tv B0x, Xbox, PS, Pc, Wifi HY300 Pro Magcubic Envio Imediato</name>
    <bar_code>5</bar_code>
    <price>688</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvm98b66j9zyb5,https://down-br.img.susercontent.com/file/sg-11134201-7rd4b-lvkvdfirppjsd6,https://down-br.img.susercontent.com/file/sg-11134201-7rd61-lvkvdd3d9lxld0,https://down-br.img.susercontent.com/file/sg-11134201-7rd4c-lvkvdhfuwm3n11,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvm98b66koke2e,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfks-lvkveb43he271b.16000081716325569.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{BRANCO,"","","",""}</color>
    <slug>{"projetor de video","projetor ",imagem,"tv sem tv","video pelo cll"}</slug>
    <description>**Projetor Inteligente HY300 PRO: Suporte 4K, Android 11, Brilho de 160 ANSI**      Descrição do Produto: Descubra o avançado projetor inteligente HY300 PRO, que oferece melhorias significativas em comparação ao modelo anterior, HY300. Equipado com o processador Allwinner H713 e o sistema operacional Android 11, o HY300 PRO proporciona uma resolução nativa de 1280*720P com suporte a 4K e brilho de 160 ANSI, garantindo uma experiência visual mais clara e brilhante.  🚀 **Características Principais**: - **Processador e GPU Avançados**: Equipado com o processador Allwinner H713 Quad-core ARM Cortex-A53 e GPU Mali-G31, suporta OpenGL ES3.2, Vulkan 1.1 e OpenCL2.0 para um desempenho gráfico eficiente e operação suave. - **Resolução e Brilho Superiores**: Resolução nativa de 1280*720P com suporte a 4K e um brilho de 160 ANSI para imagens luminosas e nítidas. - **Projeção Ajustável de 180°**: Ajuste o ângulo de projeção até 180° para obter a visualização perfeita em qualquer ambiente. - **Conectividade Moderna**: Wi-Fi dual-band 2.4G/5.8G e Bluetooth 5.0 para uma conexão rápida e estável. - **Portátil e Conveniente**: Design leve e compacto, ideal para uso ao ar livre e fácil de transportar. - **Longa Vida Útil da Lâmpada**: Até 50.000 horas de uso, reduzindo a necessidade de substituição frequente. - **Suporte para Cartão TF**: Novidade no HY300 PRO, oferece mais opções de armazenamento e reprodução.  🎨 **Especificações Técnicas**: - **Modelo**: HY300 PRO - **Tecnologia de Exibição**: LCD TFT de 2.69 polegadas - **Sistema Operacional**: Android 11 - **Conexões**: Porta de carregamento USB-C com suporte a carregamento rápido - **Dimensões e Peso**: 102 x 101 x 40 mm; 0.31 kg  📦 **Conteúdo da Embalagem**: - 1x Projetor Inteligente HY300 PRO - 1x Cabo de Carregamento USB-C - 1x Controle Remoto - 1x Manual do Usuário (Inglês)  Com funcionalidades superiores como a adição de um slot para cartão TF, maior brilho e melhor conectividade sem fio, o HY300 PRO é a escolha ideal para cinema em casa, atividades ao ar livre e trabalho móvel. Compre agora e transforme sua experiência de entretenimento e produtividade com o HY300 PRO!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/1066052934/18297687418?uls_trackid=500cj8df0100&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=ba45htoba456</url_product>
    <created_at>2024-06-11 15:33:59.924</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>ec641ed0-3a11-4fcd-92e2-7ed0b67593db</id>
    <name>Sapatênis Masculino Sneakers Casual Confort Versátil Dia-a-Dia Costurado</name>
    <bar_code>2</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98s-lmougqqnsgmv2b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lmougqqxs1t73a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lmougqqxs20na6,https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmougqqnsgza79,https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmougqqo7x86a2,""}</image>
    <size>{38,40,42,44,46}</size>
    <color>{preto,marron,azul,"Bege ",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmougqqnsgza79,https://down-br.img.susercontent.com/file/br-11134207-7r98s-lmougqqnsgmv2b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lmougqqxs20na6,https://down-br.img.susercontent.com/file/br-11134207-7r98r-lmougqqo7x86a2,""}</slug>
    <description>O Sapatênis Masculino Tênis Casual Confort Versátil Dia-a-Dia Costurado é a escolha perfeita para o homem moderno que busca um equilíbrio entre estilo e conforto em seu dia a dia. Este calçado é uma combinação ideal de sofisticação casual e praticidade, projetado para se adaptar a uma variedade de benefícios.  Este sapato apresenta um design contemporâneo, com costuras construídas que realçam sua durabilidade e qualidade de fabricação. A parte superior é confeccionada em materiais de alta qualidade, proporcionando não apenas um visual elegante, mas também uma sensação de conforto durante todo o dia.  A curiosidade deste sapato é uma das suas principais características. Ele combina perfeitamente com roupas casuais, como jeans e camisetas, mas também pode ser usado com trajes mais formais, adicionando um toque de descontração ao visual.  O conforto é uma prioridade neste modelo, com uma palmilha acolchoada que proporciona apoio aos pés, evitando a fadiga mesmo após longos períodos de uso. A sola de borracha oferece tração sólida e segura em diferentes tipos de superfícies, tornando-o perfeito para atividades diárias.  Em resumo, o Sapatênis Masculino Tênis Casual Confort Versátil Dia-a-Dia Costurado é uma escolha inteligente para homens que desejam unir estilo, conforto e detalhes em um único calçado. Seja para um dia no escritório, um encontro casual com amigos ou um passeio descontraído, este sapato está pronto para elevar seu visual e proporcionar o máximo de conforto.  OBS: Esse produto tem a palmilha costurada solado do produto !   --&gt; Guia de Tamanhos &lt;-- NUMERAÇÃO: COMP. PALMILHA // ALTURA • 37: 26,0 cm //14,0 cm • 38: 26,5 cm //14,5 cm • 39: 27,0 cm // 15,0 cm • 40: 27,0 cm // 15,5 cm • 41: 28,5 cm // 16,0 cm • 42: 29,0 cm // 16,5 cm • 43: 30,0 cm // 17,0 cm • 44: 30,5 cm // 17,5 cm  Qualquer dúvida estamos a disposição ; )</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/277446502/19397426477?uls_trackid=4vujdtj500rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vqm5ne1xcw</url_product>
    <created_at>2024-06-04 18:14:19.495</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>a5147b0f-9c05-4d83-ac93-b53512e31af8</id>
    <name>kit 3 SHORTS ZERO TRANSPARÊNCIA curto academia treino</name>
    <bar_code>4</bar_code>
    <price>72</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsysv7joyi3oe2,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsysbd6max44ff,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsyscv1jiy3oc7,"","",""}</image>
    <size>{P,M,G,"",""}</size>
    <color>{"3 preto","3 cinza ","3 rosa ","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsyscv1jiy3oc7,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsysv7joyi3oe2.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsysbd6max44ff,"short confortavel","short para treino"}</slug>
    <description>melhore seu dia dia Apresentamos o nosso mais novo lançamento: o Short Suplex que vai conquistar seu coração e te acompanhar em todas as ocasiões! Feito com o tecido super macio e flexível, o short suplex é a combinação perfeita entre estilo e conforto.  Com um design moderno e elegante, este short é versátil e pode ser usado tanto em atividades físicas quanto no dia a dia. Sua modelagem valoriza o corpo e proporciona total liberdade de movimentos, permitindo que você se sinta confiante e confortável em todas as situações.  Além disso, o tecido suplex possui alta durabilidade e resistência, garantindo que seu short estará ao seu lado por muito tempo. Disponível em diversas cores vibrantes e estampas estilosas, você pode escolher o que mais combina com o seu estilo. recomendo.  Esta peça pode ser usada no dia a dia ou na prática de atividades físicas.   Recomendamos o uso de roupa íntima nude para evitar transparências.   Este produto deve ser lavado apenas à mão e com sabão neutro.   Prefira a secagem à sombra.   Dispensa o uso de amaciante e ferro de passar.   Atenção: A forma das estampas podem variar de acordo com o corte do tecido em nossa linha de produção.   Pode haver também, variação nas cores por conta de fatores como iluminação fotográfica e brilho de cada monitor.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/519043083/22692898788?uls_trackid=4vvv7dnj00rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9tg8m8vbmxj&amp;is_from_login=true</url_product>
    <created_at>2024-06-10 02:05:32.540</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>3c981cb8-4885-4fd8-9358-7d8c0389d292</id>
    <name>Vestido Curto Feminino Tecido Duna Pipoca com Babado e Lastex Ciganinha Ombro a Ombro Fresquinho Evangélico de Verão</name>
    <bar_code>3</bar_code>
    <price>100</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98s-llvm42v8cmrb7e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotxkyic3yitd8,https://down-br.img.susercontent.com/file/br-11134207-7r98o-llvm42mml06ve3,"","",https://cvf.shopee.com.br/file/cdc13b27f2882f2f39992c2c2f0493b6}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{PRETO,LILAIS,"VERDE ","AZUL Royal","ROSA "}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-llvm42mmi71zab@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotxkyibwxol73@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-llvm42mml06ve3,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrdu4olphcfv07@resize_w1080_nl.webp," https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq2cm9nuveav2b@resize_w1080_nl.webp"}</slug>
    <description>Tamanhos Aproximados - P veste 36 a 38 / M veste 40 a 42 / G veste 44 / GG veste 44 a 46 - Medidas Aproximadas pode variar em 2 cm - Busto veste 85-110cm / Cintura veste 70-110m / Quadril até 130cm / Comprimento 97 cm  - Altura da nossa modelo 1.69cm </description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/981148472/19397156663?uls_trackid=50297ku700cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbe2vg18a2w9</url_product>
    <created_at>2024-06-19 00:07:18.016</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>bf5152b4-5315-449a-925d-ad03094186cb</id>
    <name>Samsung SSD 980 evo NGFF M . 2 Graus M2 2280 TLC pcie Gen 3.0X4 , NGFF1.4 4TB</name>
    <bar_code>12</bar_code>
    <price>280</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7r98o-lkq8ctu6bj5tcd,https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-lkq8cuepg2na8d,https://down-br.img.susercontent.com/file/sg-11134201-7r98o-lkq8cux0qoa95e,https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-lkq8cvck2j5d92,https://down-br.img.susercontent.com/file/sg-11134201-7r98o-lkq8cvw99pble8,https://cvf.shopee.com.br/file/95f6d379cc99dfc047790b7a6167daed}</image>
    <size>{4TB,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-7r98o-lkq8ctu6bj5tcd,"Samsung SSD 980 evo NGFF M . 2 Graus M2 2280 TLC","ssd  4TB","ssd 2TB","ssd m.2"}</slug>
    <description>Interno/Externo Externo Capacidade de Armazenamento 1GB Quantidade Nil Estoque 3995 Enviado de China Continental Descrição Do Produto Descrição do Produto:  Velocidade NGFF incrível incrível  Use o potencial dos computadores. O que você precisar de jogo aumenta ou fluxo de trabalho intensivo para gráficos sem costura, o 980 é a escolha inteligente para desempenho superior com a tecnologia ssD-E totalmente alimentada pela interface NGFF * E pcie 3.0.    Continuar no modo de alimentação completo  Mantenha seus SSDS correndo em desempenho de pico na unidade de motocicleta de energia total desempenho consistente e consistente. Ativado com o software Samsung Magician-enabled Samsung Magician, ele coloca seu SSD em modo ativo sem demora, para que você possa voltar imediatamente a grandes arquivos intensivos de trabalho ou jogos gráficos intensivos.    Construção a longo prazo para construção  O uso longo prazo da SSDS garante sua segurança de arquivo. Com capacidade para até 150 TBW * e um garantia limitada de 5 anos, os benefícios otimizados de durabilidade das 980 das soluções internas da Samsung, desde controles premium até V-NAND e o mais recente firmware.    Controle térmico confiável  Ssds de alto desempenho dolorosamente requerem controle térmico de alto desempenho. Para garantir um desempenho estável, 980 usa chapeamento de níquel para ajudar a gerenciar os níveis de calor do controlador e uma etiqueta de radiador para garantir um controle térmico eficaz do chip NAND.    Solução de dissipação de calor inteligente de solução de dissipação de calor inteligente  Embutido com o algoritmo de controle térmico mais antecipado da Samsung, calor de auto-manageamento de 980 para fornecer desempenho durável e confiável, minimizando as flutuações de desempenho durante longos períodos de uso.    Software mágico Samsung  Desbloqueie todo o potencial dos 980 s com a ajuda das ferramentas de otimização antecipadas e intuitivas do Samsung. Otimize o desempenho, proteja dados valiosos e receptores importantes atualizações através de mágicos para absorver a saúde da unidade Monitor, otimizar o desempenho, proteger dados valiosos e recibo atualizações importantes através de mágicos para medir que você obtenha o melhor desempenho de Ssds.    Marca de memória flash do mundo um número de memória flash  A experiência do mundo Experimente o desempenho e a confiabilidade de que apenas a marca de memória flash do mundo foi capaz de alcançar desde 2003 *. Os componentes e firmware da Samsung e dos componentes e firmware da Samsung, incluindo o DRAM e a NAND reconhecidos mundialmente, incluindo o DRAM e a NAND mundialmente conhecidos da Samsung, são fabricados em casa, possibilitando a integração final e a qualidade confiável.    Lista de Embalagem:  1 x SSD 980    A cor atual do item pode ser ligeiramente diferente da imagem exibida no site devido a diversos fatores, como o brilho do item, a cor atual pode ser ligeiramente diferente da imagem exibida no site devido a diversos fatores, como o brilho do item, a cor atual pode ser ligeiramente diferente da imagem exibida Devido a diversos fatores</description>
    <quantity>310</quantity>
    <url_product>https://shopee.com.br/Samsung-SSD-980-evo-NGFF-M-.-2-Graus-M2-2280-TLC-pcie-Gen-3.0X4-NGFF1.4-4TB-2TB-i.207024413.20698860886?sp_atk=e2b9c73a-a55d-4609-a3f8-2e6276735902&amp;xptdk=e2b9c73a-a55d-4609-a3f8-2e6276735902</url_product>
    <created_at>2024-06-18 03:20:02.466</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>c1055532-fb61-4276-88a4-5a585455d6ec</id>
    <name>Bermuda Masculina Jeans - Elastano - Confortável - Azul médio com Bigode e Puído</name>
    <bar_code>11</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltg2j9at8im069,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt2uydrf6zgt9a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt2uydrf2rrhc5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt2n1z1clmpn1f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt2uydrf8e19ef,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkr-lwdgpjbdacgic9.16000081718056369.mp4}</image>
    <size>{38,40,42,44,46}</size>
    <color>{Jeans,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltg2j9at8im069,"Short Masculino jeans","Short jeans",Short,"Short "}</slug>
    <description>Marca LIONS Estilo Atlético, Básico, Estilo de Rua Tamanho Grande Sim Tipos de Fechos Zíper País de Origem Brasil Ocasião Casual Tipos de Bermudas Bermudas Material Algodão, Denim Estampa Lisa Plus Size Não Altura da Cintura Cintura Média Quantidade 1 Tamanho Do Pacote 500G/GR Estoque com desconto 139 Estoque restante 19925 Enviado de São Paulo Descrição Do Produto *TABELA DE MEDIDAS TAMBÉM DISPONIVEL NAS FOTOS DO ANUNCIO. ATENÇÃO: PEDIR UM TAMANHO ACIMA OU MEDIR CONFORME DESCRITO NA GUIA DE TAMANHOS.   Por que comprar conosco?  Estamos no mercado desde 2010, confeccionando produtos de fabricação própria, originais, não trabalhamos com réplicas ou peça falsificada, garantindo aos compradores uma mercadoria confeccionada honestamente e com preços justos aos clientes. Nós estamos focados em proporcionar a você, a melhor experiência em compras, concentrando-nos em atender de modo eficaz e seguro. Ofertamos uma forma rápida, prática e segura para o consumidor adquirir seu item sem a necessidade de se deslocar de sua cidade. Por possuirmos fabricação própria podemos ofertar um serviço de alta qualidade com tecidos de primeira linha e com um ótimo custo benefício. A bermuda veste bem e oferece o equilíbrio perfeito entre um visual com estilo e conforto, tendo um corte elegante e contemporâneo, essas bermudas para homens são projetadas para se adaptar ao seu estilo de vida dinâmico, proporcionando liberdade de movimento sem comprometer a elegância. Temos muitos modelos disponíveis, em vários tons de jeans masculino, e diversos lavados.  Nossa equipe estará sempre focada em melhor atendê-lo, conquistando sua confiança e construindo uma parceria duradoura e satisfatória. GARANTIA DE SATISFAÇÃO: Caso haja qualquer problema, nós, da LIONS JEANS iremos te auxiliar no que for possível.     Escolha o modelo que mais lhe agrada, estamos on-line!  Especificações Técnicas: Material: 82% Algodão, 16% Poliéster, 2% Lycra Cor: Azul Tecido Elástico: A adição de Lycra oferece flexibilidade e conforto excepcionais, permitindo movimentos livres e sem restrições ao longo do dia. Lavagem: Lavagem Escura, resistente ao desbotamento Detalhes: Bolsos frontais e traseiros funcionais, fecho de zíper e botão.  FAQ (Perguntas Frequentes):  Essa Bermuda Jeans está disponível em diferentes tamanhos? Sim, oferecemos vários tamanhos disponíveis: 36/38/40/42/44/46/48 para atender às necessidades de diferentes tipos de corpo.   Temos disponibilidade em todos os tamanhos para pronta entrega. Pedidos até as 13:00 horas , são enviados  no mesmo dia.  Esta calça é adequada para uso casual e formal? Sim, a Bermuda Masculina Azul com Lycra é versátil o suficiente para ser usada em uma variedade de configurações, desde ocasiões mais casuais até eventos mais formais. O corte moderno e a cor proporcionam um visual sofisticado que se adapta a diferentes ambientes.  Como devo cuidar dessa calça para garantir sua durabilidade? Recomendamos lavar essa bermuda com cores semelhantes e evitar o uso de alvejante. Além disso, vire-a do avesso antes de lavar para preservar a cor e evitar o desgaste excessivo.  A Lycra nesta calça proporciona conforto durante todo o dia? Sim, a Lycra adicionada ao tecido oferece elasticidade e flexibilidade, permitindo que a calça se ajuste confortavelmente ao seu corpo e acompanhe seus movimentos ao longo do dia, sem comprometer o estilo.</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Bermuda-Masculina-Jeans-Elastano-Confort%C3%A1vel-Azul-m%C3%A9dio-com-Bigode-e-Pu%C3%ADdo-i.407411098.22593058297?publish_id=&amp;sp_atk=0c824ba4-6420-409d-9bb6-f8445351b688&amp;xptdk=0c824ba4-6420-409d-9bb6-f8445351b688</url_product>
    <created_at>2024-06-30 03:24:41.679</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>581d30f9-9471-4fd5-b4f4-9390039016fa</id>
    <name>Pijama Baby Doll Sexy Short Doll Feminino Detalhe de Renda Luxo</name>
    <bar_code>10</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-lju0bxnwocju92,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljtyexbegaeb46,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsgz4vq5k1zha0,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lshsa27uxs1n60,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lshsa27uz6m36b,https://cvf.shopee.com.br/file/2e461130fd19e975e8f3bca0e29ea242}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{lilais,"Vaquinha ",oncinha,preto,Vermelho}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsgz4vq5k1zha0,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lshsa27uxs1n60,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lshsa27uz6m36b,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40}</slug>
    <description>✅DESTAQUES   Modelagem:  -❤ Short Doll alças finas -❤ Decote em V com detalhe em renda nos seios e costas. -❤ Alças finas e reguláveis. -❤ Shorts com elástico embutido na cintura. -❤ Poliamida, aquele tecido geladinho.  ✅DESCRIÇÕES  Padrão: Liso Estilo: Diario Tamanho: P-34/36 / M-38/40 / G-42/44 / GG-44/45 Material: Renda  Composição: 100% Polamida (Microfibra) Tipo De Ajuste: Regulagem Esticamento: Sim Região Da Origem: Brasil, Envio Dentro de 24horas úteis  ✅PACOTE INCLUI  2 Peças: 1 Blusa com alça de regulagem / 1 Short   ✅APRESENTAÇÃO DA DAFFINE Daffine É Uma Marca Emergente Que Acredita No Poder Das Meninas, Comprometida Com A Oferta De Escolhas De Peças Intimas Com Conforto E  Elegantes E Acessíveis Para Diferentes Estilos, Necessidades E Identidades.  Nós Acreditamos Que A Moda Deve Ser Divertida, Liberadora E Você Sentemos Ótimos. Depois De Todos, O Melhor Acessório Para Qualquer Aspecto É De Autoconfiança.   ✅NOTAS DE COMPRA  Por Favor, Gentilmente, Veja Sua Altura E A Tabela De Tamanhos Antes De Comprar. Há Diferença De 2-3% De Acordo Com A Medição Manual.  Todas As Fotos De Produtos Desta Loja São 100% Tiro Real. Due À Luz E Tela Diferentes, Uma Diferença De Cor Sutil E Erro Real É Normal. Siga Nossa Loja E Descubra Novos Itens E Melhores Negócios Para Você!!   ⭐️As Encomendas Serão Enviadas Dentro De 24 Horas ⭐️ENVIO GRÀTIS ⭐️Todos Os Itens São Prontos Para Estoque E Marca Novo  *ATENÇÃO: Peça escolhida pela cor. O desenho da renda e o lacinho poderão sofrer alterações conforme a disponibilidade em estoque!  INSTRUÇÕES DE LAVAGEM: - Lavar a mão - Não usar alvejante - Não passar - Não usar secadora - Não lavar a seco - Secar a sombra.  MODELO A modelo fotográfica que está posando com esse produto veste M e possui as seguintes medidas:  Busto: 89 Cintura: 64 Quadril: 92 Altura: 1.63  Se Você Tem Qualquer Pergunta, Fale Conosco E Lhe Enviará Breve Como Necessário.😊</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/483838536/10488324982?uls_trackid=4vua0tmk01ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8owxwfrz7gj</url_product>
    <created_at>2024-06-03 15:02:14.096</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>0c815e41-55b8-4131-af25-ba15a48fee98</id>
    <name>KIT O2 PARES Tenis TELA calce facil meia conforto</name>
    <bar_code>2</bar_code>
    <price>88</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3h16yuaur9aa,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3h16yudnw56e,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3i10mypods6f,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3i10mz54mo82,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3i10moq2yn67,""}</image>
    <size>{36,38,40,42,44}</size>
    <color>{preto,azul,"vinho ","bege ",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3i10moq2yn67,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3h16yudnw56e,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3i10mypods6f,https://down-br.img.susercontent.com/file/br-11134207-7qukw-li3h16yuaur9aa,""}</slug>
    <description>Tênis Meia Feminino é a nova moda do momento, um tênis leve e confortável ideal para seu dia-dia... Parece estar descalça.  =&gt; Material: Neoprene =&gt; Peso: 300g pode variar de acordo com tamanho. =&gt; Solado: Emborrachado flexível. =&gt; Palmilha: Eva Macia =&gt; Caixa embalagem: cada par vai a sua caixa individual.  Como tirar suas medidas: Em um papel, desenhe o contorno dos pés descalços. Meça do dedão até o calcanhar. Adicione 0,5 cm de folga.  TABELA DE TAMANHO Em CENTÍMETROS DA PALMILHA 29 ---20,0 centímetros 30 ---20,5 centímetros 31 ---21,0 centímetros 32 ---21,5 centímetros 33 ---22,0 centímetros 34 --- 23,0 centímetros 35 --- 23,5 centímetros 36 --- 24,5 centímetros 37 --- 25,0 centímetros 38 --- 25,5 centímetros 39 --- 26,5 centímetros 40 --- 27,0 centímetros  PRAZO DE ENVIO Produtos a pronta entrega envio imediato!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/452135532/23591553251?uls_trackid=4vujdt4k00rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vqkrzb1e71</url_product>
    <created_at>2024-06-04 18:21:12.508</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>cfd95cca-e298-481c-95f8-47b32add470d</id>
    <name>Short feminino com ponteira</name>
    <bar_code>4</bar_code>
    <price>36</price>
    <image>{https://down-br.img.susercontent.com/file/9286ef04ec76b90792773d91953f3400,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpto5crodjb798,https://down-br.img.susercontent.com/file/br-11134201-23010-qp24326atgmvf2,"","",""}</image>
    <size>{P,M,G,"",""}</size>
    <color>{PRETO,CARAMELO,BRANCO,"LILAS ","AZUL BEBE"}</color>
    <slug>{"https://down-br.img.susercontent.com/file/9286ef04ec76b90792773d91953f3400 ","short Feminino","shot soltinho","short  pano mole","short para park"}</slug>
    <description>Shortinho Canelado Malha Canelada, lindo para seu dia dia.   Short ideal para o dia a dia, ótimo custo beneficio. Aproveite o mesmo frete leve + unidades.  Confeccionado em Malha cancelada de 90% Poliester, 10% elastano. - Alta Qualidade , Não Desbota , Após Lavar Não Precisa Passar; - Fácil de Vestir; - Não Desfia , Não Cria Bolinhas; - Com ponteira Dourada; - Excelente Elasticidade; - Rápida Secagem. ____________________________________________  Tamanhos: P M G _____________________________________________  DÚVIDAS? Utilize o campo de perguntas e estaremos à disposição para responder a todas as dúvidas!   Envio em até 24 horas após a aprovação do pagamento !</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/357273063/11016276971?uls_trackid=502o2g6500cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbptbzcjgj8j</url_product>
    <created_at>2024-06-20 19:17:22.310</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>e408db72-69eb-40ce-a264-1c0879cf9f73</id>
    <name>Bone calilove snapback furado laser california model premium branco</name>
    <bar_code>9</bar_code>
    <price>76</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpbh38f79htx0e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpbh38f7839h5a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpbh5maf7sr9a9,"","",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Marron,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpbh38f79htx0e,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Material Algodão País de Origem Brasil Gênero Masculino Estilo de Chapéu Boné Estoque 7 Enviado de Paraná Descrição Do Produto BONÉ RURAL´S DENIM  MODELO: Trucker  Características: - Cada produto da RURAL´S DENIM BKF é elaborado e fabricado pensando no seu conforto e seu estilo; - Bordado em alta definição; - Tecido de ótima qualidade; - Aba curvada costurada; - Se encaixa perfeitamente em qualquer tipo de cabeça; - Correia de ajuste na parte de trás; - Ideal para usar em rodeios, festas Country, exposições e principalmente no dia a dia!  Obs: Fotos tiradas em um estúdio dentro, reproduzindo fielmente o produto.  - Todos os nossos produtos são a pronta entrega e realizamos a postagem em no máximo 12 horas;  - Após a compra você terá um canal de atendimento online direto com nossa loja!  - Todos nossos produtos são REVISADOS antes de serem embalados;  - Caso ainda tenha alguma dúvida nossas atendentes terão o maior prazer em responder!   Agradecemos sua visita e desejamos uma ÓTIMA Compra!   GARANTIA:  Esse produto tem garantia assegurada pelo fabricante em um prazo de 30 dias.  Observações: Produto vendido a unidade. Os produtos podem apresentar pequenas alterações na cor devido flash da câmera fotográfica, configurações dos monitores, configurações dos dispositivos móveis e lotes de fabricação do produto pelo fornecedor. Porém, garantimos que as características do produto (quantidade, peso, matéria prima e funções) não serão</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/bone-chapeu-country-agro-produtor-rural-texas-a-roca-venceu-i.747498515.20833978612?sp_atk=a9a90b72-f249-45b6-9da5-8162708abb09&amp;xptdk=a9a90b72-f249-45b6-9da5-8162708abb09</url_product>
    <created_at>2024-06-30 02:18:02.372</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>0f15b115-bd9b-4e78-8a14-4b9cf9b0137e</id>
    <name>Bone calilove snapback furado laser california model premium branco</name>
    <bar_code>9</bar_code>
    <price>116</price>
    <image>{https://down-br.img.susercontent.com/file/fe1f15dea59a4b3c6c0d6613d8ee980d,https://down-br.img.susercontent.com/file/f0df7efa4805a4f0142dae82058cabec,https://down-br.img.susercontent.com/file/031a318a81df13a06f9e03f1726799ab,https://down-br.img.susercontent.com/file/672726e969554dad44596d006e10ce8a,"",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Branco,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/fe1f15dea59a4b3c6c0d6613d8ee980d,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>País de Origem Brasil Gênero Unissex Estilo de Chapéu Boné Material sarja Estoque 274 Enviado de São Paulo Descrição Do Produto Para segurança os produtos são enviados em caixa resistente para não amassar e manter a forma de fábrica, Bonés a Pronta Entrega,  ❓️Duvidas frequentes:  ✅️Modelo adulto com medidas aproximadas:  Para Modelo de frente alta: Medidas Aproximadas, altura 14cm de altura e 55cm circunferência média, máxima 63cm reguláveis,  Para Modelo 5Panel Medidas Aproximadas, Altura 10cm a 12cm de Altura e 55cm circunferência média, máxima 63cm reguláveis, ✅️Somos revendedores autorizados única loja com modelos exclusivos  ✅️Produtos Originaisde Qualidade.  ✅️Enviamos em caixa para não amassar o boné. ✅️Boné embalado com plástico para preservar tecido. ✅️Fotos reais do produto. ✅️Enviamos em até 24hrs após a confirmação de sua compra. ✅️Temos o melhor preço GARANTIDO. ✅️Mais de 300 modelos Maior loja de bonés da plataforma. ✅️Bordado lateral da marca (Idem fotos). ✅️Traseiro com etiqueta da marca. ✅️Viés interno com etiqueta da marca e de composição. ✅️Fechamento strapback ou snapback (Idem fotos). ✅️Todos nossos produtos são verificados antes do envio.  * TEMOS OUTRAS CORES E MODELOS CONFIRA EM NOSSA LOJA:  Bonés Anth co, Hype, Black Bulls, Black, ABA RETA, ABA CURVA, NYC, NY, 5PANEL, STRAPBACK, SNAPBACK, AGRONOMIA, FÉ, TRUCKER, LISO, COWBOY, NEW YORK CITY,  FITA, FITÃO, SNAPBACK, STRAPBACK, TELA, TELINHA, BASEBALL, ULTRA, DEAD HAT, NY, CAMURÇA, LASER, FURADO, DESTROYER, NYC, LA, RASGADO, BANDEIRA, SUEDE, CARAMELO, BULLS, BMW, FERRARI, GOLF, JESUS, MODELOS TOPS.</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Bone-calilove-snapback-furado-laser-california-model-premium-branco-i.227210775.19232170978?sp_atk=ef7fa2cc-509e-4c28-9908-3fe95a20ebba&amp;xptdk=ef7fa2cc-509e-4c28-9908-3fe95a20ebba</url_product>
    <created_at>2024-06-30 01:54:11.287</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>794fd070-fd23-49c0-a8ac-ae67b909156e</id>
    <name>Kingston HyperX FURY DDR4 16gb DDR4 2133Mhz desktop 2400/2666/3200mhz PC4 RAM Memória SO-DIMM 288 Pinos Preto</name>
    <bar_code>12</bar_code>
    <price>348</price>
    <image>{https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lqbxlaokh3iwdd,https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvkgm6ux30yufb,https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lqbxlaok8o4847,https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvkgm6ux4fja11,https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lvkgm6ux5u3q8e,https://cvf.shopee.com.br/file/api/v4/11110105/mms/sg-11110105-6khwl-lvj40x0exwgfb8.16000081716219004.mp4}</image>
    <size>{"DDR4 16GB","","","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{"Kingston HyperX FURY DDR4 4gb 8gb 16gb DDR4","Memoria ram DDR4","Memoria ram 16gb DDR4 2133Mhz desktop","Memoria ram DDR4 ","Memoria ram","Memoria ram "}</slug>
    <description>Marca Hyperx RAM 4GB Tipo de Memória DDR4 Duração da Garantia 12 Meses Tipo de Garantia Garantia do Fornecedor Velocidade do Clock de Memória 2133MHz Quantidade 1 Estoque 2017 Enviado de China Continental Descrição Do Produto Cor preta  Nome do produto de memória do Desktop: Memória DDR4  Capacidade de memória de 4 GB/8 GB/16 GB  Tecnologia de memória RAM DIMM  Frequência: PC4-17000 (2133MHz)/PC4-19200 (2400MHz)/PC4-21300 (2666MHz)/PC4-25600 (3200MHz)  Tempo de memória de tempo de memória: CL15/CL17/CL19/CL22  Tensão: 1,2V  Tipo de Interface: 288 pinos  Função sem transbordamento  Compatibilidade com todas as placas-mãe DDR4: Suporta toda placa-mãe DDR4  💓    F&amp;q:  As mercadorias estão prontas?  Sim temos estoque  2. Quando será enviado?  Enviamos em três dias.  Por quanto tempo podemos receber as mercadorias?  Após o pagamento, leva totalmente de 15 a 25 dias para chegar à sua porta  4. O seu pacote é seguro?  - Embalaremos as mercadorias com várias camadas de plástico bolha, para que a embalagem seja muito segura  O que devo fazer se as mercadorias estiverem danificadas ou perdidas durante o processo de logística?  Entre em contato com nosso atendimento ao cliente imediatamente, resolveremos esses problemas perfeitamente para você  ❤❤❤     Caro amigo! Somos diretos da fábrica, sem intermediários, por isso garantimos que você obterá os melhores produtos de qualidade com os menores preços  ♥️     Envios em cerca de 3 dias</description>
    <quantity>310</quantity>
    <url_product>https://shopee.com.br/Kingston-HyperX-FURY-DDR4-4gb-8gb-16gb-DDR4-2133Mhz-desktop-2400-2666-3200mhz-PC4-RAM-Mem%C3%B3ria-SO-DIMM-288-Pinos-Preto-i.1007237060.21587289841?sp_atk=fbde707e-8833-4cba-9692-bc1e0d5b0104&amp;xptdk=fbde707e-8833-4cba-9692-bc1e0d5b0104</url_product>
    <created_at>2024-06-18 03:28:51.281</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>be2ebb21-7fa3-448a-87ea-740f064be93f</id>
    <name>Shorts Jeans Feminino Cintura Alta Cos Alto Desfiado Hot Pants</name>
    <bar_code>4</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lou5ny4uau85cc,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lgpqijycwaob75,https://down-br.img.susercontent.com/file/f3f557b4b7ae16a6105f3f08b7d75449,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqjogre8r5z734,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lou5ny4u2ethd4,""}</image>
    <size>{34,36,38,40,42}</size>
    <color>{"Preto rascado ","Branco  rasgado",Preto,"Cinza VB","Bordado claro"}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lou5ny4uau85cc,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lgpqijycwaob75,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lou5ny4u57ydd0@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnnil0thkd7017@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqjogre8r5z734@resize_w450_nl.webp}</slug>
    <description>Porque comprar com a gente?  1- Peças de alta qualidade que não desbota, zipper não prende, botões não soltam. 2-  Modelagem impecável a peça vai se ajustar perfeitamente ao seu corpo. 3- Acabamento perfeito cada detalhe pensando no seu conforto. 4- Envio imediato.  Nossos jeans valorizam as formas femininas através de um recorte anatómico (levanta bumbum) deixando tudo no lugar se ajustando perfeitamente ao corpo.  Composto por 100% algodão ajustam-se perfeitamente ao corpo feminino  MEDIDAS  As medidas são aproximadas e tem como base mulheres brasileiras “reais” podendo apresentar pequenas variações. NOSSOS TAMANHOS SERVEM PERFEITAMENTE EM 99% DAS NOSSAS COMPRADORAS.  Guia de tamanhos   Tamanho  Quadril cm	Comprimento cm	  Cintura cm 36                   86                   39                           72 38	               90     	       40	                      76 40	               94	               40	                      80 42	               98	               40	                      84 44	              102	               41	                      88 46	              106	               41	                      92  ALGUMA DUVIDA? ENTRE EM CONTATO PELO CHAT, TEMOS ATENDENTES 24H 7 DIAS PODE SEMANA.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/411258921/4983514092?uls_trackid=4vvv7b6u02rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9tg6j5c5fc3&amp;is_from_login=true</url_product>
    <created_at>2024-06-10 02:28:37.816</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>c074424a-bdd2-4b4b-9758-95e266adfcd3</id>
    <name>Baby doll Feminino canelado cropped com renda short doll confortável .</name>
    <bar_code>10</bar_code>
    <price>48</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrpv1kl4gzxcf,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrpcg8gruod21,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrpcg8gunt9d1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrpcg8h0a31bf,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrpv1kl4hffdb,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfks-lsro3n7l302s3d.16000081710199322.mp4}</image>
    <size>{M,G,GG,Fantastico,""}</size>
    <color>{"BRANCO ",LILAIS,"VERDE / teos",AZUL,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,"pijama ",https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsrnd8ypqcro5f@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,"baby doll confortavel "}</slug>
    <description>BABY DOLL COM TECIDO CANELADO COM DETALHES EM RENDA.  * benefícios  - Veste bem. - Empodera. -Tecido leve. - Material de qualidade.  * medidas  M (38) - (Busto 92 / Cintura 71 / Quadril 100)  G (40) - (Busto 97 / Cintura  76 / Quadril 105) GG (42) - (Busto 102 / Cintura 81 / Quadril 110)  * ENVIAMOS EM ATÉ 24 HORAS APÓS A CONFIRMAÇAO DO PAGAMENTO ! * QUALQUER DUVIDA ENVIAR UMA MENSAGEM PELO CHAT !</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/1062747850/22692893641?uls_trackid=50000d9t00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9u1gffihdsd</url_product>
    <created_at>2024-06-10 02:49:07.052</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>510c6f63-a4c9-4799-b809-df515aa61604</id>
    <name>Vestido Valentina Tubinho Colado Curto Aro V franzido Alcinha</name>
    <bar_code>3</bar_code>
    <price>72</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsircbx0o5kr3f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsircbx0pk5731,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsircbx0lcfv57,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsircbx0truj75,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsircbx0sda3ce,https://cvf.shopee.com.br/file/33520e05ac8c06c629556cc7c6365888}</image>
    <size>{"unico 36 ao 40 ","","","",""}</size>
    <color>{PRETO,vermelho,roxo,rosa,"azul claro"}</color>
    <slug>{vestido,"vestido colado ","vestido curto","vestido sexy","vestido sensual "}</slug>
    <description>estido Tubinho Colado Aro V franzido Alcinha  ✅Dk modas    ✅Garantimos com toda certeza cada informações digitada aqui abaixo:  ▪ Tecido: suplex romance  ▪ Tamanho: único veste do 36 ao 40  ✅Informações do produto: As fotos são reais do produto, temos vídeo para confirmação. Produto de alta qualidade tecido confortável que se encaixa perfeitamente no seu corpo.   ✅Garantia:  Ao receber seu produto se atente e confirmar se não tem nenhum problema, só conclua seu pedido após a conferência, porquê depois de concluir o pedido a shopee não aceita mais devolução/reembolso. as peças são verificadas um por um antes do envio para termos certeza que irá receber em perfeita condições.   ❓APROVEITE E COMPRE AGORA NOSSO ESTOQUE PODE ESGOTAR A QUALQUER MOMENTO!  qualquer dúvida fique a vontade de pergunta estaremos a disposição !  BOAS COMPRAS!  🚚Envio Super Rápido</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/518776879/19697127688?uls_trackid=4vtb4gs300ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b81j97sweu8s</url_product>
    <created_at>2024-05-30 19:37:39.180</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>e8bc4771-ac98-4ac5-9b43-b6532295e34b</id>
    <name>bolsa esportiva bolsa de armazenamento de grande capacidade AlexStore</name>
    <bar_code>15</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rd47-lvafxegsb9ez72,https://down-br.img.susercontent.com/file/sg-11134201-7rd6q-lvafy19sxtf12d,https://down-br.img.susercontent.com/file/sg-11134201-7rd4j-lvafy44grkmi75,https://down-br.img.susercontent.com/file/sg-11134201-7rd5y-lvafxyy0cf8i9b,https://down-br.img.susercontent.com/file/sg-11134201-7rd5f-lvafxx5cz1bk5b,https://cvf.shopee.com.br/file/8301a2d92ad5f6ab6377143671cce683}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"PRETO ","VERDE ","ROXO CLARO ",ROSA,"AZUL  BEBE"}</color>
    <slug>{"bolsa esportiva ","mochila ","bolsa grande ",bolsa,"bolsa gigante "}</slug>
    <description>Especificações: É rolamento de carga forte e uso conveniente, que pode armazenar diferentes itens separados para mantê-los limpos com seu multi-bolso e grande capacidade. Desde que tem um compartimento de sapato independente, este produto é respirável, limpo e higiênico para usar. O que um saco de armazenamento para piquenique, ginásio, caminhadas, ao ar livre e continuar desde que é impermeável e portátil, que é amplamente aplicado e multiuso. Feito de material de pano de oxford, este produto é resistente ao desgaste e duradouro. O comprimento deste produto é 42cm, largura é 35cm, e a altura é 20cm. É adequado para viagens ao ar livre, fitness, basquete e outras cenas esportivas, que é fácil de armazenar roupas, portátil, saco de toalete, sapatos e guarda-chuva dobrável. Material: Pano de Oxford Características: anti-mancha, facilmente limpo, fadeless Tamanho Detalhes: 42cm x 35cm x 20cm/16.54 x 13.78 x 7.87 (aprox.) Notas: Devido à diferença de configuração de luz e tela, a cor do item pode ser ligeiramente diferente das imagens. Por favor, permita uma ligeira diferença de dimensão devido à medição manual diferente. Brand Name: Origin:Mainland China</description>
    <quantity>200</quantity>
    <url_product>https://shopee.com.br/product/478697224/11198664834?uls_trackid=5007hfsj03rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9zgzu9xkm9q</url_product>
    <created_at>2024-06-11 01:39:37.598</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>da6c27e1-cb2d-4a09-b1d9-5a037d3dbe23</id>
    <name>Bolsa Praia C/ Compartimento Cooler Térmico Passeio Play Joy Verão</name>
    <bar_code>15</bar_code>
    <price>40</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvm1wf05,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvnggvb9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvknbz77,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvj8rjf9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvhu73d9,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-luqkh2rpudsw67.16000081714491169.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,Verde,Azul,"",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvm1wf05,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvm1wf05,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqfabhpvnggvb9,"",""}</slug>
    <description>Se você está procurando uma bolsa de praia que seja funcional e elegante, a bolsa de praia com compartimento térmico da marca Play Joy pode ser a escolha perfeita para você.  Esta bolsa é perfeita para quem gosta de curtir a praia ou a piscina sem se preocupar com a comida e bebida, pois o compartimento térmico mantém tudo fresquinho por muito mais tempo. Além disso, ela possui um amplo espaço interno para acomodar suas toalhas, protetores solares, óculos de sol e tudo mais que você precisa para um dia perfeito ao sol.  Mas não é só isso, a bolsa de praia Play Joy é extremamente resistente e durável, sendo feita com materiais de alta qualidade para garantir a sua satisfação por muitas temporadas de verão.  Não perca a oportunidade de adquirir a melhor bolsa de praia do mercado e torne seus dias de verão ainda mais incríveis com a Play Joy.  Não deixe de fazer a sua compra agora mesmo e aproveite nossas condições especiais. Estamos ansiosos para atendê-lo(a) e fazer parte dos seus momentos de lazer.  Dimensões Aproximadas: - Alura: 40 cm - Largura: 13 cm - Comprimento: 35 cm - Peso: 260 g</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/323192182/19899180146?uls_trackid=5007hpcr00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9zh8mr7fc7q</url_product>
    <created_at>2024-06-11 02:02:50.119</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>d4006633-1fd1-4de4-8731-33d5810f3b59</id>
    <name>Bolsa Necessaire Para Maquiagem Cosméticos Divisória Mala Viagem</name>
    <bar_code>15</bar_code>
    <price>28</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5ertv2dea,https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5ertuwi62,https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5ersghxce,https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5f1s1n95b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5esnczp98,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,Branco," Rosa","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5ertuwi62,https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5f1s1n95b," https://down-br.img.susercontent.com/file/br-11134207-7r98o-loxam5ersghxce","bolsa para maquaigem ",necesaire}</slug>
    <description>NÃO É SÓ MAIS UM ORGANIZADOR, É SINONIMO DE PAZ E TRANQUILIDADE NAS SUAS FÉRIAS!  A bolsa organizadora de viagem à prova D’agua Washbag irá te ajudar a lidar com a tarefa de planejar da melhor maneira possível a sua mala. Feita com um material muito resistente, é ideal para guardar todos os tipos de produtos; principalmente os que podem vazar, como shampoos, perfumes, maquiagens, pois ela é a prova d’água. Um produto completo, disponível nas cores, rosa, pink, preta, branca e azul, para você arrasar com a sua bagagem! Basta colocar todos os seus itens dentro dela e ter a certeza de que estará tudo sempre no lugar certo. Adquira hoje mesmo esse produto incrível, pare de procurar e comece a desfrutar de um ambiente totalmente eficiente e organizado!      - Design Moderno - Variedade de cores e estilos - Prova d’água - Fácil de limpar - Durabilidade  CARACTERÍSTICAS  - Material: PVC Fosco - Caráter: Portátil, impermeável, grande capacidade - Cores: Rosa, Pink, Preta, Branca e Azul - Detalhes: Zíper altamente resistente    - Será enviado na cor escolhida no momento da compra - Não acompanha cosméticos e acessórios usados nas imagens.   Pronta entrega, qualquer dúvida estamos à disposição!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/427430137/22897165601?uls_trackid=5007ho9a00rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9zh7pvemo7d</url_product>
    <created_at>2024-06-11 01:57:03.992</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>41037552-7f81-456e-8898-6f632dd8db07</id>
    <name>Kingston A400 SSD 400GB Sata 3 Solid State Drive 2.5 Inch</name>
    <bar_code>12</bar_code>
    <price>212</price>
    <image>{https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjxc3e9a,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjyqnud2,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjvxiy62,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjrptm9d,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjqb9699,https://cvf.shopee.com.br/file/735e02bce0d15adb6b1fbe7721a7ae9c}</image>
    <size>{400GB,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjxc3e9a,ssd,"SSD Sata 3 Solid State Drive 2.5","ssd externo","ssd portatio"}</slug>
    <description>Interno/Externo Externo Estoque 3992 Enviado de China Continental Descrição Do Produto [novo] Kingston SATA3 Ssd A400 Ssd unidade de estado sólido embutido 2,5 polegadas Sata III Hdd disco rígido Hd Ssd laptop  Características:  1. Velocidade incrível e mais confiável e confiável e incrível. Velocidades de leitura de até 500 MB/s e velocidades de gravação de até 450 MB/s Leia velocidades de até 500 MB/s e gravação de até 450 MB/s.  2. Dê ao espaço que você precisa para aplicações, vídeos, fotos e outros documentos importantes.  3. A resistência ao choque e à vibração também é mais fresca e silenciosa, e sua resistência ao choque e à vibração o torna ideal para o estilo de computação móvel notebook e dia.    Descrição do Produto:  O disco rígido Hypothesicle é 10X mais rápido que um disco rígido &amp;amp; Sup.    Especificações do:  Cor da cor preta  Ram de 120G, 240G, 480G,960G        Pacote incluído:  Ssd    Notas de Aviso:  1. Devido à Espritação entre monitores diferentes, a imagem pode não refletir a cor atual do item. Nós vamos o estilo é o mesmo que os das fotos.  2. Entrega devido à ligeira dimensãoPor favor, digite uma ligeira dimensãoOferta devido a diferentes manuais.</description>
    <quantity>300</quantity>
    <url_product>https://shopee.com.br/Kingston-A400-SSD-Sata-3-Solid-State-Drive-2.5-Inch-960GB-120G-240-480g-1TB-2T-i.360862865.3276420727?sp_atk=ec286710-2567-480c-ad12-62d93778c5eb&amp;xptdk=ec286710-2567-480c-ad12-62d93778c5eb</url_product>
    <created_at>2024-06-18 03:05:13.331</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>be69fb11-77d8-4019-8f0f-327eeb6ee927</id>
    <name>Kit Upgrade INTEL CORE i3 I5 Placa Mãe H61 1155 + Memória 8gb ou 16GB Ddr3 1600 Mhz + Cooler Rgb</name>
    <bar_code>12</bar_code>
    <price>900</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui9z0cyebv827,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui6qixsvt7822,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui6qixsx7ro0b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui9z0cycxas6c,"",https://down-tx-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkp-lw4uew4v4v5h64.default.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui9z0cyebv827,"Kit Pc Upgrade processador Intel Core i5 3470 memoria 8gb Ram","Kit Pc Upgrade processador Intel Core i5 3470 placa mãe H61","Kit Pc Upgrade processador Intel i5 3470 placa mãe H61","placa mãe H61"}</slug>
    <description>Marca Intel Número de Compartimentos de Memória 2 Fator de Forma Micro ATX Tipo de Tomada da CPU LGA 1155 Chipset da Placa Mãe H61 Nome do Modelo KIT UPGRADE Nr de Homologação 4598158349 Fabricante CYBERFAST Estoque 65 Enviado de São Paulo Descrição Do Produto Kit Upgrade Intel Core ATENÇÃO ESCOLHE O KIT QUE DESEJA!!  Conteúdo No Kit:  1 - Placa Mâe H61 GigaLan 10/100/1000 1 - Processador Intel CORE " ESCOLHER NO ATO DA COMPRA" 1 - Memoria Ram DD3 1600Mhz " ESCOLHER NO ATO DA COMPRA" 1 - Cooler Universal Para Processador Led RGB " ESCOLHER NO ATO DA COMPRA"  Características: Marca: Intel Modelo: I3-3240   Especificações:   Desempenho: - Número de núcleos: 2 - Nº de threads: 4 - Frequência baseada em processador: 3.30 GHz - Cache: 3 MB Intel® Smart Cache - Velocidade do barramento: 5 GT/s - TDP: 55 W     Especificações de memória - Tamanho máximo de memória (de acordo com o tipo de memória): 32 GB - Tipos de memória: DDR3 1333/1600 - Nº máximo de canais de memória: 2 - Largura de banda máxima da memória: 25.6 GB/s - Compatibilidade com memória ECC ?: Não    Gráficos de processador - Gráficos do processador ?: Gráficos HD Intel® 2500 - Frequência da base gráfica: 650 MHz - Máxima frequência dinâmica da placa gráfica: 1.05 GHz - Intel® Quick Sync Video: Sim - Tecnologia Intel® InTru? 3D: Sim - Interface de Vídeo Flexível Intel® (Intel® FDI): Sim - Tecnologia de alta definição Intel® Clear Video: Sim - Nº de telas suportadas ?: 3 - ID do dispositivo: 0x152 - Opções de expansão - Revisão de PCI Express: 2.0 - Configurações PCI Express ?: up to 1x16, 2x8, 1x8 &amp; 2x4   Placa Mãe  CPU: Supports Intel Socket 1155 Core i7/ i5/ i3 processors  Chipset: Intel H61  Suporte de memória: Support Dual channel DDR3 1600/1333/1066 SDRAM (8GB Max) 2 x DDR3 DIMMs (240 pin/ 1.5V) LAN: Spport Realtek 10/100/1000 Mbps  Áudio: Chip integrated by Realtek® ALC662  Slot: 1 x PCI Express x16 Slot 1 x PCI Express x1 Slot  Armazenamento: 4 x SATA port  Conectores Internos: 1 x 24-pin ATX Power Connetor 1 x 4-pin ATX 12V Power Connetor 2 x USB connector support additional 4 USB ports 1 x LPC_DEBUG connector 1 x Front panel audio connector 1 x System Panel connector 1 x M.2  Painel traseiro: 1 x USB keyboard 1 x USB mouse 1 x VGA 1 x HDMI 4 x USB 2.0 (2 x USB 2.0,2 1 x LAN(RJ45) Port 3 x Audio jack  BIOS: EFI BIOS  Acessórios: 1 x CD do driver 1 x Manual do usuário 1 x Placa de E/S 1 x Cabo SATA  Formato: Micro ATX, 190 x 170 mm  Memoria Ram  CHIPS EXCLUSIVOS! Diferentemente de outras marcas, a Jazer cria seus próprios chips de memória por meio de uma equipe exclusiva de pesquisa e desenvolvimento. Com contratos exclusivos com fabricantes renomados, como SK Hynix, SEC e Micron, a Jazer tem controle total sobre as especificações de suas memórias RAM, resultando em uma qualidade única de desempenho, durabilidade e estabilidade!  CONSTRUÇÃO PRIMOROSA! Produto de altíssima qualidade em construção e acabamento. As placas de circuito integrado das memórias RAM Jazer possuem 8 camadas de construção, tornando-as significativamente mais duráveis do que outras memórias, geralmente fabricadas com apenas 4 camadas!  TESTES RIGOROSOS! A Jazer se preocupa com a qualidade de seus produtos e por isso testa rigorosamente suas memórias RAM através de sistemas automatizados e manuais, avaliam a estabilidade e durabilidade do produto e garantindo que estão aptas a lidar com todos os tipo de uso!  AMPLA COMPATIBILIDADE! As memórias são compatíveis com uma ampla gama de placas-mãe DDR3, tanto para Intel quanto para AMD!  SOBRE A JAZER A Shenzhen Jiuhe Precision Technology Co., Ltd. é uma empresa fundada em 2016 que se dedica ao desenvolvimento e fabricação de dispositivos de armazenamento, como memórias RAM, SSDs e HDs. Suas marcas mais conhecidas são a Juhor e a Jazer, esta última voltada especialmente para as memórias RAM de alta performance. A empresa realiza rigorosos testes em todos os seus produtos a fim de garantir que sejam seguros e estáveis, mesmo em períodos prolongados de uso. Com um compromisso com a excelência em qualidade e performance, a Shenzhen Jiuhe Precision Technology Co., Ltd. é uma referência no mercado de dispositivos de armazenamento.   INFORMAÇÕES DO PRODUTO: Compatibilidade: Intel e AMD Tecnologia da memória: DDR3 Especificação: PC3-12800 Plataforma: Desktop Capacidade: 8GB Velocidade da memória: 1600MHz Tipo de slot: DIMM Canal: Suporte a dual-channel Pinos: 240 Tensão: 1.5V Buffer: Sem buffer Função: Não-ECC   Tempos de latência tCL-tRCD-tRP-tRAS por frequência: 1600MHz: 11-11-11-28 1333MHz: 9-9-9-24 1066MHz: 7-7-7-19 800MHz: 6-6-6-14  Cooler  Características: Suporta processadores Intel e AMD Alta eficiência de refrigeração Super Silencioso 4 Leds em Casa Especificações: Compatibilidade:  Soquete Intel: LGA 775/115x/1200/1700/1366 Soquete AMD: AM5/AM4/AM3+/AM3/AM2+/AM2/FM2+/FM2/FM1 Dimensões com dissipador: 120mm(C) x 120mm(L) x 62mm(A) Dimensões do Fan: 90mm x 15mm(a) Velocidade: 2100 rpm+/- 10% Tipo de rolamento: Hidráulico Tensão de partida: 7 Vdc Tensão de </description>
    <quantity>5</quantity>
    <url_product>https://shopee.com.br/Kit-Pc-Upgrade-processador-Intel-Core-i5-3470-memoria-8gb-Ram-placa-m%C3%A3e-H61-com-cooler-i.720963503.19699185668?sp_atk=e112f63e-5f16-47bc-a670-04ae8360a283&amp;xptdk=e112f63e-5f16-47bc-a670-04ae8360a283</url_product>
    <created_at>2024-06-18 02:42:10.629</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>b625a8ac-8b50-4e3d-b3e3-4b67e5607eb9</id>
    <name>Grampeador de Tapeceiro Alta Pressão Profissional Manual + 1000 grampos 8MM Kit Madeira Parede Sofá</name>
    <bar_code>6</bar_code>
    <price>76</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf8mei34j8l56,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf8mei34jfkf9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf8mei3a5id0a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf52ukn4qjkce,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf52ukn6540b0,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{" https://down-br.img.susercontent.com/file/br-11134207-7r98o-luf8mei34j8l56","garampaidor de tapete ","grampador de sofa ","grampiador para moveis","grampaidor de tapeceiro "}</slug>
    <description> PROMOÇÃO POR TEMPO LIMITADO!  Envio rápido, com Nota Fiscal e Garantia!! O nosso foco é atender melhor você!!   Grampeador de Tapeceiro Alta Pressão Profissional para Estofados   O Grampeador de tapeçaria Variall selecionado pela Fokus é perfeito para você que precisa de um grampeador profissional para te auxiliar no trabalho em estofados. Desenvolvido com design inteligente, estrutura robusta, e mecanismo de alta pressão, o seu dia-a-dia terá mais praticidade e eficiência. Para profissionais e entusiastas de tapeçaria, decoração, artesanato, reparos e muito mais   Alta Resistência e Durabilidade  Agora você poderá realizar trabalhos de tapeçaria com precisão e eficiência com o kit conjunto profissional de Grampeador de Alta Pressão Manual. Este kit completo inclui um grampeador de alta qualidade, projetado para suportar trabalhos intensivos, juntamente com 1000 grampos de 8mm, para que você tenha tudo o que precisa para produzir imediatamente.   Fixação Firme e Segura  O grampeador de alta pressão manual Variall da Fokus oferece uma fixação firme e segura em uma grande variedade de materiais, desde estofados até madeiras, garantindo resultados profissionais em cada projeto. Com sua operação manual, você tem controle total sobre a pressão e a precisão dos grampos, permitindo que você trabalhe com confiança e agilidade.   Acompanha 1000 Grampos 8MM  Este kit acompanha 1000 grampos de 8mm incluídos neste conjunto que garantem que você tenha um suprimento abundante para lidar com múltiplos trabalhos de tapeçaria sem interrupções. Com este conjunto, você estará pronto para enfrentar qualquer desafio de tapeçaria com facilidade.   Ferramenta Versátil e  Multitarefas  Com sua capacidade de operar em alta pressão, este grampeador oferece uma fixação segura e firme em uma grande variedade de materiais, incluindo: madeira, tecido, plástico dentre outros. Seu design ergonômico proporciona conforto durante o uso prolongado, reduzindo a fadiga do usuário.  Maximize Seus Projetos de Tapeçaria com esta Ferramenta Multifuncional!   Garanta já o seu!   Detalhes do Produto  - Indicado: tapeçaria, decoração, artesanato, reparos e muito mais - Executa todas as tarefas de forma: rápida, organizada e profissional. - Compacto e funcional - Muito leve - Fácil de usar - Aceita grampos tipo U: de 4 mm, 6mm, e 8mm - Gatilho de Alta Pressão. - Garantia: 03 meses  Itens Inclusos: -  1 Grampeador - 1000 Grampos de 8mm   Produto: Grampeador de Tapeceiro Alta Pressão Profissional Manual + 1000 grampos Marca: Variall Nota fiscal: Acompanha Garantia: 3 meses Indicações: tapeçaria, decoração, artesanato, reparos e muito mais Altura (base): 8cm Altura (corpo): 5,5cm Altura (base ao gatilho): 12cm Largura: 2,5cm Comprimento (base): 17,5cm  Peso: 200g Composição: PP e Metal Portátil: Sim Cor: Amarelo e metálico Prazo de validade: indeterminado (produto não perecível)   ATENÇÃO: Prazo de Envio:  - Envio rápido e imediato, com Nota Fiscal e Garantia!!  - Todos nossos produtos em estoque e à pronta entrega! - Enviamos os produtos bem embalados. - Nosso foco é atender melhor você!!</description>
    <quantity>200</quantity>
    <url_product></url_product>
    <created_at>2024-06-13 02:12:24.591</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>e3913c8a-e6f6-4b85-b61e-f66a5f29589e</id>
    <name>Maleta Estojo Kit Caixa Jogo Ferramentas Completa Sparta</name>
    <bar_code>6</bar_code>
    <price>260</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rbmy-lm800qvl627d10,https://down-br.img.susercontent.com/file/sg-11134201-7rbmc-lm800t2dyr8933,https://down-br.img.susercontent.com/file/sg-11134201-7rblx-lm800tt0ykpl28,https://down-br.img.susercontent.com/file/sg-11134201-7rbn1-lm800x2e5f3d72,https://down-br.img.susercontent.com/file/sg-11134201-7rbmm-llj6tr8us7fffc,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{" https://down-br.img.susercontent.com/file/sg-11134201-7rbmy-lm800qvl627d10","kit de ferramenta ","Jogo de ferramentas ","kit completode ferramenta ","ferramenta para o dia dia "}</slug>
    <description>COMPOSTO POR:    - Jogo Kit De Ferramenta 129 Peças Sparta  - Jogo Chave Soquete C/ Catraca Reversível 40 Pçs Sparta    DESCRIÇÃO:    Jogo Kit De Ferramenta 129 Peças Sparta    Jogo de Ferramentas com 129 Peças é projetado especialmente para uso em domestico e hobista. As peças são produzidas de acordo com padrões internacionais. As ferramentas são feitas de aço, oferecendo durabilidade e resistência.    - Bits, bits-inserções e chaves de fenda são feitos de aço S2  - As peças são acondicionadas em uma maleta plástica  - Permite uso para realizar reparos em apartamentos e casas de campo, reparar aparelhos de uso doméstico e equipamentos de jardim, entre outros    - Jogo composto por:  :: Alicate Bico Meia Cana Reto 6,5”  :: Alicate Corte Diagonal 6,5”  :: Alicate Prensa Terminal  :: Cabo anatômico com catraca para bits  :: 4 Chaves de precisão  :: Chave ajustável (inglesa) de 6”  :: Estilete 9mm  :: Martelo unha 250g com cabo metálico emborrachado  :: Nível 9” (230mm) com 3 bolhas  :: 10 Parafusos 6mm com cabeça chata, zincados, Phillips  :: 46 Pregos de aço com cabeça 20mm  :: 5 Parafusos máquina, cabeça redonda, com porca sextavada  :: 4 Ganchos  :: Buchas plásticas para fixação (6 x 25mm)  :: Trena (3,5m x 12mm)  :: 20 Bits:  # 4 bits Allen: H3 – H4 – H5 – H6  # 2 bits quadrados: S1 – S2  # 4 bits Tork: T10 – T15 – T20 – T25  # 3 bits Pozidrive: 0 – 1 – 2  # 3 bits Phillips: PH1– PH2 – PH3  # 3 bits Fenda: 3 – 4 – 5  # 1 adaptador  :: 16 Chaves Allen:  # 8 (mm): 1,5 – 2 – 2,5 – 3 – 4 – 5 – 5,5 – 6mm  # 8 (pol.): 1/16 – 5/64 – 3/32 – 1/8 – 5/32 – 3/16 – 7/32 – 1/4"    - Garantia: 3 meses    - Marca: SPARTA    --------------------------    Jogo Chave Soquete C/ Catraca Reversível 40 Pçs Sparta    * Contém:    - 1 Estojo Ferramentas Chave Catraca Bits Adaptador 40 Pçs Sparta    * Itens inclusos:    - 2 Bits pozidrive 25mm: PZ1, PZ2  - 2 Bits de fenda 25mm: 5,6mm  - 3 Bits phillips 25mm: PH1, PH2 e PH3  - 10 Soquetes Sextavado: 4 - 4,5 - 5 - 5,5 - 6 - 7 - 8 - 9 - 10 - 11mm  - 10 Soquetes Sextavado: 3/16 - 7/32 - 1/4' - 9/32 - 5/16 - 11/32 - 3/8 - 13/32 - 7/16 - 1/2'  - 3 Soquetes de encaixe de 3/8': 12 - 13 - 14mm  - 3 Soquetes estriados: 1/4' - 5/16 - 3/8  - 1 Chave catraca Reversível encaixe 3/8  - 1 Extensão para soquetes de 3 encaixa 3/8  - 1 adaptador 3/8 para 1/4'  - 1 Cabo fenda para soquetes encaixe 1/4'  - 1 adaptador macho encaixe 1/4 sextavado  - 1 adaptador fêmea encaixe 1/4' sextavado    * Vantagens:  - Alta Resistência e Durabilidade  - Produto de Qualidade e Garantia  - Produto a Pronta Entrega  - Envio Imediato a Compra    SKU: KIT11097-12489    Distribuído por Ismafer Ferramentas</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/360012700/10985603714?uls_trackid=500oite701vv&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bacts2kdmvoy</url_product>
    <created_at>2024-06-13 02:21:58.104</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>37c1ac28-8838-4d6b-a56c-7577884a331b</id>
    <name>Furadeira Philco Force PFU01 650W 5 Velocidades</name>
    <bar_code>6</bar_code>
    <price>240</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rblu-lltddu8fiq03bc,https://down-br.img.susercontent.com/file/sg-11134201-7r98q-lltddn37z42ib2,https://down-br.img.susercontent.com/file/sg-11134201-7r999-lltddokrrccr15,https://down-br.img.susercontent.com/file/sg-11134201-7rbkc-lltddqb77z9550,"",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{" https://down-br.img.susercontent.com/file/sg-11134201-7rblu-lltddu8fiq03bc","furadeira para concreto","furadeira  para usso pequenos ","furadeira top ","furadeira para madeira "}</slug>
    <description>A Furadeira Philco PFU01 facilita a sua vida na hora de cuidar da sua casa. Com650W de potência e alta performance a eficiência do seu trabalho está garantida!   Tem função speed control que oferece controle eletrônico de velocidade, assim você pode ajustar de acordo com a sua necessidade, evitando assim , super aquecer brocas de maior tamanho e evitar a quebra ou danos a ferramenta. Além de 5 diferentes posições de ajuste de velocidade.   Também função martelete, ajudando a furar superfícies mais duras com maior facilidade. E função impacto que melhora a performance na perfuração de concreto. Possui ainda, reversão de rotação, aumentando o retorno da broca na perfuração.   E para sua segurança, sua empunhadura é emborrachada e tem trava de gatilho, proporcionando maior segurança durante o uso.  Perfeita assim só a Philco faz pra você!  •	Cordão elétrico com 1m; •	Mandril 3/8” •	Acompanha chave para mandril •	Possui função martelete •	Possui seletor de martelete/perfuração •	Trava de gatilho •	5 posições de ajuste de velocidade •	Reversão de rotação •	Diâmetro de perfuração em aço: 10mm •	Diâmetro de perfuração em madeira: 20mm •	Diâmetro de perfuração em concreto: 10mm</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/811034337/23030472468?uls_trackid=500odb000000&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bacph5cjp52o</url_product>
    <created_at>2024-06-13 01:51:49.015</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>0b68e140-1896-4463-9acd-cb15a40881a5</id>
    <name>kit Parafusadeira/furadeira 48 pçs portátil carregador usb Leve forte desmontar e montar</name>
    <bar_code>6</bar_code>
    <price>148</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lprgehe0vl0n85,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lp69o1bt0xwyfd,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lp69o1bsy4s22a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lp69o1bsbnmd2e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lp69o1bssiia04,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkr-ls2g912iv1noec.16000081708672762.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lprgehe0vl0n85,"furadeira e parafusadeira  kit","kit de ferramentas furadeira e parafusadeira ","furadeira e parafusadeira profissional ","furadeira e parafusadeira  para trabalhar"}</slug>
    <description>Função FURADEIRA -&gt; perfura somente locais simples e leves como exemplo: madeira, Drywall  etc...    NÃO PERFURA CONCRETO...    Produto a PRONTA ENTREGA com envio IMEDIATO!    - Envio em menos de 12 horas    - Atendimento exclusivo - suporte ao cliente pós compra    - Garantia contra defeitos de fabricação    Produto 100% novo e de alta qualidade. LINHA PREMIUM    Conteúdo da Embalagem:  01 Unid. Parafusadeira / Furadeira Sem Fio  28 Unid. Bits de 25mm  08 Unid. Soquetes  04 Unid. Bits de 50mm  02 Unid. Brocas  01 Unid. Suporte p/ Bits  01 Unid. Adaptador  01 Unid. Cabo carregador USB (Pode ser usado em qualquer porta USB para carregamento)  ***NÃO ACOMPANHA CAIXA DE CARREGADOR, SOMENTE O CABO USB***     Instruções de Uso:  - Utilize para construções leves.  - Botão deslizante para alterar entre parafusar e desparafusar.  - Design com alça projetado para um ótimo manuseio.  - Possui luz e indicador Led de bateria.     Ficha Técnica:  - Voltagem: 4.2v  - Bateria: 1800mAh Li-On  - Velocidade de rotação s/ carga: 200rpm  - Torque: 5Nm  - Tempo de carregamento: 2-3hrs  - Dimensões da embalagem: 22 x 20 x 6</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/1125085057/19997521629?uls_trackid=500omf4a00vv&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bacwi1gomw27</url_product>
    <created_at>2024-06-13 02:40:55.270</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>b8288a51-31f8-40c0-bd01-9763ccb3e80a</id>
    <name>Kingston A400 SSD 960GB Sata 3 Solid State Drive 2.5 Inch </name>
    <bar_code>12</bar_code>
    <price>240</price>
    <image>{https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjyqnud2,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjxc3e9a,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjvxiy62,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjt4e2b7,https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjqb9699,https://cvf.shopee.com.br/file/735e02bce0d15adb6b1fbe7721a7ae9c}</image>
    <size>{960GB,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/cn-11134207-7qukw-ljdma4tjyqnud2,ssd,"SSD Sata 3 Solid State Drive 2.5","ssd externo","ssd portatio"}</slug>
    <description>Interno/Externo Externo Estoque 3992 Enviado de China Continental Descrição Do Produto [novo] Kingston SATA3 Ssd A400 Ssd unidade de estado sólido embutido 2,5 polegadas Sata III Hdd disco rígido Hd Ssd laptop  Características:  1. Velocidade incrível e mais confiável e confiável e incrível. Velocidades de leitura de até 500 MB/s e velocidades de gravação de até 450 MB/s Leia velocidades de até 500 MB/s e gravação de até 450 MB/s.  2. Dê ao espaço que você precisa para aplicações, vídeos, fotos e outros documentos importantes.  3. A resistência ao choque e à vibração também é mais fresca e silenciosa, e sua resistência ao choque e à vibração o torna ideal para o estilo de computação móvel notebook e dia.    Descrição do Produto:  O disco rígido Hypothesicle é 10X mais rápido que um disco rígido &amp;amp; Sup.    Especificações do:  Cor da cor preta  Ram de 120G, 240G, 480G,960G        Pacote incluído:  Ssd    Notas de Aviso:  1. Devido à Espritação entre monitores diferentes, a imagem pode não refletir a cor atual do item. Nós vamos o estilo é o mesmo que os das fotos.  2. Entrega devido à ligeira dimensãoPor favor, digite uma ligeira dimensãoOferta devido a diferentes manuais.</description>
    <quantity>300</quantity>
    <url_product>https://shopee.com.br/Kingston-A400-SSD-Sata-3-Solid-State-Drive-2.5-Inch-960GB-120G-240-480g-1TB-2T-i.360862865.3276420727?sp_atk=ec286710-2567-480c-ad12-62d93778c5eb&amp;xptdk=ec286710-2567-480c-ad12-62d93778c5eb</url_product>
    <created_at>2024-06-18 03:02:33.675</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>9615f8f3-fc13-4cfb-b927-c00f34e2540d</id>
    <name>Jogo De Ferramentas Kit 129 Peças</name>
    <bar_code>6</bar_code>
    <price>140</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqqvtu0ub9rb6b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqnr7otfgiyr0b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqnr7otfhxj773,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqnr7otfjc3n37,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqnr7otfnjszf0,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqqvtu0ub9rb6b,"kit de ferramentas ",ferramentas,"ferramenta ","kit profissionalize ferramentas "}</slug>
    <description>Maleta de Ferramentas Profissional com 129 Peças - Kit Completo para Reparos e Manutenção  Um kit completo com 129 peças que vai revolucionar a forma como você encara qualquer desafio em casa, no trabalho ou em qualquer lugar que sua criatividade o leve!  Economia e Praticidade: Com este kit, você economiza tempo e dinheiro, eliminando a necessidade de comprar ferramentas individualmente. Estamos oferecendo uma solução completa em um único pacote.  O que está incluído: Chaves de fenda e Phillips Soquetes e catracas Alicates e chaves ajustáveis Nível e fita métrica E muito mais!  Contém: 8 unidades - Chave Hexagonal em Aço Carbono - 1.5 / 2 / 2.5 / 3 / 4 / 5 / 5.5 / 6mm 8 unidades - Chave Hexagonal em Aço Carbono Galvanizado - 1.5 / 2 / 2.5 / 3 / 4 / 5 / 5.5 / 6mm 1 unidade - Nível em plástico - 9" - 22,8cm 1 unidade - Alicate de Corte em Aço - 6" - 15,2cm 1 unidade - Alicate de Bico Fino em Aço - 6" - 15,2cm 1 unidade - Chave Inglesa em Aço - 6" - 15,2cm 1 unidade - Martelo Unha em Ferro Gusa - 24cm 68 unidades - Pregos em Aço A3 - 2cm 6 unidades - Parafusos em Aço A3 - 2,5cm (M6) 6 unidades - Buchas em Polipropileno - 2,3cm 1 unidade - Cabo para Bits em Plástico e Aço Galvanizado - 16cm 1 unidade - Trena 3m x 16mm em Plástico ABS e Aço Carbono 4 unidades - Chave de Precisão em Aço Carbono - 2.0+ / 2.0- / 2.4+ / 2.4- 1 unidade - Alicate Descascador de Fios em Aço A3 - 20,3cm 1 unidade - Estilete em Aço Carbono - 9mm - 14cm 20 unidades - Bits em Aço A3 - PH1 / PH2 / PH2 / PH3 / T10 / T15 / T20 / PZ1 / PZ2 / PZ3 / SL3 / SL4 / SL5/ SL6 / H3 / H4 / H5 / S1 / S2 / S3  Características Principais:  Diversidade de Ferramentas Qualidade Superior Organização Eficiente Presente Perfeito Durabilidade Durante Anos  Garantia: 7 dias  Dúvidas e Contato: Estamos à disposição para responder a quaisquer perguntas. Não hesite em entrar em contato através do campo de perguntas.</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/536770480/22192812528?uls_trackid=500okm3t00vv&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bacv5ede44qv</url_product>
    <created_at>2024-06-13 02:31:07.553</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>774c00b7-d3a8-4a6b-8fa7-357d150d26d7</id>
    <name>legging jeans fake calça feminina moda fitness esportiva casual</name>
    <bar_code>1</bar_code>
    <price>40</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-22110-tucqfq0ekgjv55,https://down-br.img.susercontent.com/file/sg-11134201-22110-1grq6p0ekgjvea,https://down-br.img.susercontent.com/file/sg-11134201-22110-nkvbqb0ekgjv2a,"","",""}</image>
    <size>{Unico,"","","",""}</size>
    <color>{"AZUL ",PRETO,"saia jeans unico","Laggings corta l","shorts azul"}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-22110-tucqfq0ekgjv55.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ls006lb4rlmj94@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ly2b4nnk7es2a7@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxxzofyfw4ov58@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxio5ji6o9rqd2@resize_w450_nl.webp}</slug>
    <description>tamanho único usa 36———-44</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/376184252/16189072945?uls_trackid=5020ac7101cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bb7mbo7dixfy</url_product>
    <created_at>2024-06-17 22:06:12.877</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>b51f50f2-2058-4b37-a84b-f557b7205e3c</id>
    <name>Calça Legging Disco Cintura Alta Cirre Couro Fake Bolsos Skinny Moda Feminina</name>
    <bar_code>1</bar_code>
    <price>100</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134211-23030-w12utlilhhov12,https://down-br.img.susercontent.com/file/br-11134211-23030-9p0ytlilhhovbc,https://down-br.img.susercontent.com/file/br-11134211-23030-s6uxtlilhhov82,https://down-br.img.susercontent.com/file/br-11134211-23030-clgwtlilhhovbf,"",""}</image>
    <size>{P,M,G,GG,G1}</size>
    <color>{PRETO,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134211-23030-ggnttlilhhov35.webp,"Calça Legging couro fake","Calça Legging para sair ","Calça Legging femina","Calça Legging top"}</slug>
    <description>INFORMAÇÕES DO PRODUTO: - Tecido: Cirre - composição: Couro sintético  - Tamanho: P M G GG P 36/38  M 38/40 G 40/42 GG 44 G1 46-48 G2 50   OBS1: O BOTÃO DA CALÇA É NA COR PRETO E É FAKE  OBS2: USEM CALCINHA CORTE A LASER PARA NÃO FICAR MARCANDO A CALCINHA. * *  CARACTERÍSTICAS:  Tecido super confortável, alta elasticidade, e com um ótimo caimento.  * * *  OBSERVAÇÕES IMPORTANTES:  - Antes de realizar a compra verifique se todos os seus dados e endereço estão corretos. - Não aceitamos devolução de produtos usados, lavados, com odores ou mau uso.  - Tire todas as dúvidas antes de realizar a compra. - Enviamos o seu produto até 1 dia útil após a confirmação do pagamento.  Conosco você compra tecidos de qualidade!!!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/459678321/9596457932?uls_trackid=5020erjr00cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bb7prx4e9y75</url_product>
    <created_at>2024-06-17 22:45:16.153</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>3fcde570-d441-443b-be35-e603e3fbf62d</id>
    <name>Kit Pc Upgrade processador Intel Core i5 3470, memoria 8gb Ram, placa mãe H61, com cooler</name>
    <bar_code>12</bar_code>
    <price>1000</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqe2qkiwq52f4f,"","","","",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqe2qkiwq52f4f,"Kit Pc Upgrade processador Intel Core i5 3470 memoria 8gb Ram","Kit Pc Upgrade processador Intel Core i5 3470 placa mãe H61","Kit Pc Upgrade processador Intel i5 3470 placa mãe H61","placa mãe H61"}</slug>
    <description>Marca Intel Número de Compartimentos de Memória 2 Fator de Forma Micro ATX Fabricante Intel Corporation Chipset da Placa Mãe h61 Nome do Modelo 3470 Nr de Homologação 44453879776 Tipo de Tomada da CPU 1155 Estoque 9 Enviado de Rio de Janeiro Descrição Do Produto Processador Intel® Core i5 3470 3.4GHZ Turbo Placa Mãe MaxxDigital™ H61 Placa Integrada Gráficos HD Intel® 2500 Memória RAM de 8gb™  Processador i5 3470 3.4GHZ Número de núcleos: 4 Nº de threads: 4 Litografia: 22nm Frequência base do processador:3.40 GHz turbo boost Cache: 6 MB Intel® Smart Cache Velocidade do barramento: 5 GT/s Tecnologia Intel® Turbo Boost frequência 2.0 ‡ 3.80 GHz TDP: 77 W  Gráficos de processador: Gráficos HD Intel® 2500 Frequência da base gráfica: 650 MHz Máxima frequência dinâmica da placa gráfica: 1.15 GHz Intel® Quick Sync Video: Sim Tecnologia Intel InTru 3D: Sim Interface de Vídeo Flexível Intel® (Intel® FDI): Sim Tecnologia de Alta Definição Intel® Clear Video: Sim Nº de monitores aceitos ‡ 3 ID do dispositivo: 0x102   Placa-Mãe Intel H61 • Marca: MaxxDigital • Modelo: H61/B75M • CPU: Soquete LGA1155 para processadores da série i3, i5 e i7 da Intel de 3ª geração • Chipset: Intel H61/B75 Express  Interface de entradas e saídas: • 2x USB 3.0 • 4x USB 2.0 • 1x porta VGA • 1x porta HDMI • 1x porta RJ45 • 1x porta de áudio 3-em-1 (line-in, line-out e mic-in)  Na interface da placa: • 1x conector de energia ATX de 24 pinos • 1x conector de energia ATX 12 Volts de 4 pinos • 2x conectores USB, pode suportar até 4x USBs 2.0 • 1x conector de áudio • 1x conector de painel • 1x conector de Speakers • 1x conector de Fans • 1x conector serial SATA • 1x conector LPC_DEBUG  Som integrado • Com codec de áudio HD de 6 canais • Fornece interface de áudio frontal • Fornece interface de microfone estéreo  Lan integrada   Slots de Expansão • 1x Slot PCI Express x16 • 1x Slot PCI Express x1   Dimensões • Arquitetura Micro-ATX de 19cm de altura por 17cm de largura  Memória RAM Kingston Tipo: Ram DDR3 Capacidade da memória: 8GB Velocidade da memória: 1600mhz pc3-12800 Capacidade da unidade de Chip: 512 * 8 Soquete de memória: DIMM low profile Latência do CAS de memória: CL11 Dimm: 240 pinos Voltagem: 1,5 V Função: Memória não ECC Lasca: Chips originais ETT Embalagem: Em blister lacrado</description>
    <quantity>3</quantity>
    <url_product>https://shopee.com.br/Kit-Pc-Upgrade-processador-Intel-Core-i5-3470-memoria-8gb-Ram-placa-m%C3%A3e-H61-com-cooler-i.720963503.19699185668?sp_atk=e112f63e-5f16-47bc-a670-04ae8360a283&amp;xptdk=e112f63e-5f16-47bc-a670-04ae8360a283</url_product>
    <created_at>2024-06-18 02:33:17.019</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>0c263249-d079-4107-88f0-48fd1cdf7dd8</id>
    <name>Macaquinho Gringo / Macacão de Shorts Gringa / Zíper / Academia Fitness</name>
    <bar_code>4</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/ef341cb091abd55d5fe1d0d59b5fc9ad,https://down-br.img.susercontent.com/file/5193cb34da37f803e15d73ed76a8a191,https://down-br.img.susercontent.com/file/d42155cdb0f664550cd6d725d92973cb,https://down-br.img.susercontent.com/file/cfa55b9565c78a7aad60e46ad29ca5bd,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsjyk86he0pwb8,https://cvf.shopee.com.br/file/e26326e28bf7b403c9bc807478105702}</image>
    <size>{P,M,G,GG,G1}</size>
    <color>{PRETO,"VERDE MILITAR","ROSA PINK","BRANCO ","NUDE "}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr52y5xqqa6l5a@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr52y5xr1iqs4f@resize_w1080_nl.webp," https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr52y5xqqa780b@resize_w1080_nl.webp","https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr52y5xr1iq51b@resize_w1080_nl.webp ",https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr52y5xqvwgd56@resize_w1080_nl.webp}</slug>
    <description>Macaquinho Gringo Fitness, o sucesso de vendas!  Esse modelo é a prova viva de conforto, moda e versatilidade, pois você pode usar em diversas ocasiões, muito indicado para academia, festa a fantasia, dia a dia, balada e onde mais preferir!   Especificações: - Suplex de ótima qualidade - Não fica transparente  - Zíper ajustável  - Disponível nos tamanhos P, M, G, GG, G1 - Composição 95% Poliester 5%Elastano - Garantia de 7 dias após chegada do produto em mãos  - Prazo de Postagem: Produto enviado em ate 24 hrs após confirmação do pagamento  P (36/38) - Busto 38cm / Cintura 36cm / Comprimento 74cm M (40) - Busto 40cm / Cintura 38cm / Comprimento 77cm G (42) - Busto 42cm / Cintura 40cm / Comprimento 78cm GG (44) - Busto 44cm / Cintura 42cm / Comprimento 80cm G1 (46) Busto 46cm / Cintura 44cm / Comprimento 81cm   Após receber seu produto não esqueça de confirmar o seu recebimento.  E mais importante ainda pra nós é saber a sua opinião e satisfação quanto ao produto, nos avalie contando sua experiência</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/315658368/12804359998?uls_trackid=502ns3bm01cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbpoehmos5u9</url_product>
    <created_at>2024-06-20 18:43:56.513</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>7f04060b-0396-4558-912c-002ff910bc92</id>
    <name>Boné Trucker casual Redinha Aba Curva Linha Country pescaria pecuaria</name>
    <bar_code>9</bar_code>
    <price>88</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-22100-5bif5a2ppqiv6b,https://down-br.img.susercontent.com/file/839fe077291ce60cf9338641f0af4d79,https://down-br.img.susercontent.com/file/sg-11134201-22100-54bptxkqpqiv12,"","",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Preto Foscu","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-22100-5bif5a2ppqiv6b,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Material Algodão País de Origem Brasil Gênero Unissex Estilo de Chapéu Boné Quantidade 20 Estoque 27 Enviado de Paraná Descrição Do Produto Seja Muito Bem Vindo(a) A LOJA MASTER GIFT  BONÉ: RURAL´S  MODELO: Trucker  Ao adquirir este produto você estará comprando de UMAS DAS MELHORES LOJA  ! Somos referência no segmento e já estamos a mais de 9 anos no Mercado;  Boné Country RURAL´S  Características:  - Cada produto da: RURAL´S é elaborado e fabricado pensando no seu conforto e seu estilo; - Bordado em alta definição; - Tecido de ótima qualidade; - Aba curvada costurada; - Se encaixa perfeitamente em qualquer tipo de cabeça; - Correia de ajuste na parte de trás; - Ideal para usar em rodeios, festas Country, exposições e principalmente no dia a dia! Obs: Fotos tiradas em um estúdio dentro, reproduzindo fielmente o produto. - Todos os nossos produtos são a pronta entrega e realizamos a postagem em no máximo 12 horas; - Compre sem receio! No caso de não servir ou não gostar a devolução é gratuita! - Após a compra você terá um canal de atendimento online direto com nossa loja! - Todos nossos produtos são REVISADOS antes de serem embalados; - Caso ainda tenha alguma dúvida nossas atendentes terão o maior prazer em responder! Agradecemos sua visita e desejamos uma ÓTIMA Compra!  GARANTIA:  Esse produto tem garantia assegurada pelo fabricante em um prazo de 30 dias.  Observações: Produto vendido a  unidades. Os produtos podem apresentar pequenas alterações na cor devido flash da câmera fotográfica, configurações dos monitores, configurações dos dispositivos móveis e lotes de fabricação do produto pelo fornecedor. Porém, garantimos que as características do produto (quantidade, peso, matéria prima e funções) não serão alteradas.</description>
    <quantity>20</quantity>
    <url_product>https://shopee.com.br/Bon%C3%A9-Trucker-casual-Redinha-Aba-Curva-Linha-Country-pescaria-pecuaria-i.747498515.19825138281?publish_id=&amp;sp_atk=81d8c2a0-cdd8-4b4e-acfa-c55ca5307833&amp;xptdk=81d8c2a0-cdd8-4b4e-acfa-c55ca5307833</url_product>
    <created_at>2024-06-30 02:28:43.691</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>3f9b0793-e3d1-4e56-acbf-0dd8b9485dbd</id>
    <name>Memoria Ram Para Pc DDR3 8GB 1600mhz Promoção!</name>
    <bar_code>12</bar_code>
    <price>136</price>
    <image>{https://down-br.img.susercontent.com/file/48978dba251d0b046b2fe996b848ac42,https://down-br.img.susercontent.com/file/63d845f17dbb59dd64e1e6592ab0d328,https://down-br.img.susercontent.com/file/e8fed5c8db25734ac6caa73c1a2530e1,"","",https://down-aka-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfkr-lo1akufrj1vra8.default.mp4}</image>
    <size>{8GB,"","","",""}</size>
    <color>{Verde,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/48978dba251d0b046b2fe996b848ac42,"memoria ram ddr3","memoria ram ddr3 8gb","memoria ram ddr3 ","memoria ram ddr3 kingston"}</slug>
    <description>Marca Kingston RAM 8GB Tipo de Memória DDR3 Duração da Garantia 3 Meses Tipo de Garantia Garantia do Fornecedor ROM 8GB Dimensão (A x L x C) 7x3x0,3cm Quantidade 1x8gb Tamanho Do Pacote 15CM Velocidade do Clock de Memória 1600MHz Estoque 9883 Enviado de São Paulo Descrição Do Produto NÃO SUPORTA LGA 775  (comprar 1333mhz para garantia o funcionamento)   Se você está procurando uma maneira rápida e fácil de melhorar o desempenho do seu desktop, a memória RAM é uma das melhores opções disponíveis. A memória Kingston KVR16N11/8 é uma excelente escolha para quem busca um aumento significativo de eficiência e capacidade.  Com capacidade de 8GB DDR3, essa memória é perfeita para quem precisa de uma melhora rápida na performance do seu PC. Além disso, ela possui uma garantia de 3 meses com a loja, o que garante ainda mais segurança e tranquilidade na hora da compra.  Um dos grandes diferenciais da Kingston KVR16N11/8 é sua qualidade. A marca é conhecida por produzir memórias RAM de alta qualidade, que oferecem alto desempenho e confiabilidade, além de serem compatíveis com uma grande variedade de placas-mãe e falha.  Se você precisa de várias unidades dessa memória para seu negócio ou empresa, temos disponível. Com esta oferta, você poderá economizar muito e ainda obter um produto de alta qualidade para seus clientes.  Não há dúvida de que a memória Kingston KVR16N11/8 é uma das melhores escolhas para quem deseja melhorar o desempenho do seu desktop. Com uma garantia de 3 meses com a loja, qualidade superior e preço especial, essa memória é a escolha certa para quem busca um upgrade de qualidade e eficiência em seu PC.  Não espere mais para melhorar a performance do seu computador! Adquira agora mesmo a memória Kingston KVR16N11/8 e tenha um desktop mais rápido e eficiente em suas tarefas administrativas.  NÃO SERVE PARA NOTEBOOK NÃO SERVE PARA NOTEBOOK NÃO SERVE PARA NOTEBOOK</description>
    <quantity>400</quantity>
    <url_product>https://shopee.com.br/Memoria-Ram-Para-Pc-DDR3-8GB-1600mhz-Promo%C3%A7%C3%A3o!-i.411338596.21811747716?sp_atk=24c3fd18-c047-48fa-a99a-af8e80e79c77&amp;xptdk=24c3fd18-c047-48fa-a99a-af8e80e79c77</url_product>
    <created_at>2024-06-18 03:43:45.089</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>1be21eae-8607-41ed-9819-193384107fbb</id>
    <name>Kit 2 Camisolas com bojo confortavel linha noite sensual e leve 2 calcinhas fio dental Camisola Franciele</name>
    <bar_code>10</bar_code>
    <price>148</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqiciic2kahz63,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqca8fsip1jz34,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqcd6v61o1kz5f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqca8fsinmzj6a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqca8fsiruovfb,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"ESCOLHA A COR NO CHAT ","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqiciic2kahz63,"pijama ","babay doll",camisola,"camisola confortavel"}</slug>
    <description>TECIDO SOFISTICADO COM TRANSPARÊNCIA   Comprando o KIT de camisolas Franciele você receberá 2 camisolas e 2 calcinhas!  Bojo:  P e M possuem bolha, ótimo para enchimento e sustentação. G e GG são de casquinha, totalmente confortável e ótimo para se modelar aos seios  Tipo da Calcinha: Fio dental   NÃO COMPRE SEM OLHAR A TABELINHA DE MEDIDAS!  Tabela de medidas:   P: Abaixo do busto -&gt; 68/72 Busto-&gt; 78/87 Quadril-&gt; 78/87 Cintura -&gt;  64/75   M: Abaixo do busto -&gt; 73/78 Busto-&gt; 88/92 Quadril-&gt; 88/92 Cintura -&gt; 76/ 85  G:  Abaixo do busto -&gt; 79/86 Busto-&gt; 93/97 Quadril-&gt; 93/98 Cintura -&gt;  86/ 95  GG: Abaixo do busto -&gt; 87/95 Busto-&gt; 97/105 Quadril-&gt; 98/115 Cintura -&gt;  96/105</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/549508401/19297607828?uls_trackid=4vua0u7800mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8owybvysw5h</url_product>
    <created_at>2024-06-03 14:52:19.457</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>87556fdb-4d19-4e4f-b51f-9855f1849a36</id>
    <name>kit c/3 Sutiã Básico Reforçado de Microfibra Com Bojo do P ao GG PROMOÇÃO</name>
    <bar_code>10</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-22090-9ub75cjcd2hv38,https://down-br.img.susercontent.com/file/065b1a668f99c4de03998ef8afc4a1fe,https://down-br.img.susercontent.com/file/cdb12ad6bbc8830a67472a9852c07406,"","",""}</image>
    <size>{"",P,M,G,GG}</size>
    <color>{PRETO,NUDE,BRANCO,VARIADAS,"3 PRETO"}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-22090-9ub75cjcd2hv38,"sutiã feminino","sutiã confortavel","sutiã lindo","sutiã lbonitoi"}</slug>
    <description>Sutiã Básico confortável com alças ajustáveis e bojo de qualidade.  Tamanhos P e M possuem bolha, dando mais conforto e realçando o volume dos seios.  os tamanhos G e GG não possuem bojo bolha, somente bojo casca liso  confeccionado em material poliamida e elástano. Possui alças ajustáveis, fechamento por colchetes na parte de trás, bojo casca com aro e forro  Tamanho PP 34-36	 P	38 M	40-42 G	44 GG	46  A opção de colorido não tem opção de escolha, enviaremos de acordo com estoque disponível no momento da separação</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/562005578/16669902295?uls_trackid=502o4q5f00cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbpv4h5tw3io</url_product>
    <created_at>2024-06-20 19:33:25.930</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>2f6da607-bf66-42eb-88ef-7a95e3f1b0dc</id>
    <name>Short Curto Laço Bengaline Shortinho Feminino Cintura Alta Top Com Bolso</name>
    <bar_code>4</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljad0k278j3kdb,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lizzpyfqq7udc9,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lizzpyfqrmet2f,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljad0k279xo0f8,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhs901cozcil30,https://cvf.shopee.com.br/file/a95a57184e843a84b10c6e47f15864e5}</image>
    <size>{G,M,GG,"",""}</size>
    <color>{CARAMELO,"VERDE MILITAR ","ROSA SECO ","AZUL MARINHO",""}</color>
    <slug>{short,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lizzpyfqrmet2f,"short com elastico","short feminino","short legal"}</slug>
    <description>✨ Fabricação própria ✨  Pronta entrega ✅  Short Curto Laço Bengaline Shortinho Feminino Cintura Alta Top Com Bolso  Tecido grosso de altíssima qualidade, resistência e elasticidade! Não fica transparente e se modela ao corpo! Contém Cinto regulável de amarrar.   As cores disponíveis para compra são a pronta entrega.   GUIA DE TAMANHOS:   M veste 38/40  G veste 42/44 GG veste 44/48.   A composição do material é de: 75% Viscose, 20% Poliamida, 5% Elastano.   Renove seu guarda roupas com peças confortáveis que não saem de moda! Após confirmação de pagamento enviaremos o produto em até 24 horas úteis.   Peça a pronta e entrega ✅  Peça que não pode faltar no seu guarda roupas ✅  Qualquer dúvida é só entrar em contato conosco no campo de mensagem. Boas compras!   PERGUNTAS FREQUENTES:   TEM O PRODUTO A PRONTA ENTREGA? Sim. Todos os nossos produtos disponíveis para compra temos em estoque, e são enviados em até 24 horas úteis.   COMO COMPRAR CORES DIFERENTES? Para comprar várias cores, adicione uma Cor de cada vez no Carrinho de compras nas cores e (ou) tamanhos que deseja que todas serão postadas no mesmo Frete sem custos adicionais. Se encontrar dificuldades, coloque a quantidade total desejada em qualquer cor e tamanho conforme respostas recebidas no campo de Perguntas. (Verificar se o produto em questão é tamanho único, no início do anúncio).   COMO CALCULAR O FRETE? Para calcular o frete, clique no botão "Envio (Modificar)", que fica logo abaixo do preço do produto, e então insira seu CEP. O frete será calculado automaticamente e também será informado o prazo “estimado” da entrega (Lembrando que o prazo da previsão de entrega informado é aproximado e e não exato, pois dependerá da agilidade da transportadora.)   TENHO DIREITO AO FRETE GRÁTIS? Depende do valor do carrinho e da existência de cupons. O Frete Grátis é um benefício oferecido pelo site da Shopee. Para verificar se tem cupons de frete grátis, entre em "Meus cupons". Se sua compra for superior a 39 reais a Shopee oferece Frete Grátis. Utilize o campo de Perguntas, estamos à disposição para esclarecer a todas as dúvidas! Boas compras!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/365372890/9222225630?uls_trackid=502o0peu00cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbps18u9cr4w</url_product>
    <created_at>2024-06-20 19:07:30.335</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>e5cfafd3-8488-4be1-a18b-9f31ffc1c7b3</id>
    <name>Short Feminino Conforto Ideal Pra Usar Com Vestido Coladinho</name>
    <bar_code>4</bar_code>
    <price>28</price>
    <image>{https://down-br.img.susercontent.com/file/72c7884b69f617ec2e353956ed491930,https://down-br.img.susercontent.com/file/db9cd3cdb5ce3e5de02cfc1604a345d6,https://down-br.img.susercontent.com/file/e1124bbdbd3d588eccb9ae95ee8a87f7,"","",""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{Preto,Branco,"","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/72c7884b69f617ec2e353956ed491930," https://down-br.img.susercontent.com/file/e1124bbdbd3d588eccb9ae95ee8a87f7","mini short ","short para picinha "," shot para treino "}</slug>
    <description>ENVIO IMEDIATO  APROVEITE AGORA!!!  Nossos short boxer são de modelagem para serem os shorts mais confortáveis, respiráveis e elegantes que você já usou.   Eles são feitos com um tecido especial  de micro fibra que é macio e elástico, para fique perfeito ao seu corpo fazendo uma silhueta excepcional.   E eles são tão leves e arejados que você mal saberá que os está usando.   Além disso, eles não marca na roupa podendo usar com vestidos saias mais justa estilos para se adequar a qualquer  look e ocasião.   TAMANHO DISPONIVEIS Tamanho	BR	Quadril	Cintura p	36,38	90-94 cm	68-73 cm m	38,40	95-102 cm	76-83 cm g	40,42	102-109 cm	86-93 cm gg	44,46	110-122 cm	96-105 cm  APROVEITE PARA ARRASAR  COM ESSA LINDA PEÇA VERSATIL E DE GRANDE UTILIDADE  PARA DUVIDA UTILIZE O CHAT</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/308635203/19524575483?uls_trackid=502nuo1400cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbpqfqnvuxtw</url_product>
    <created_at>2024-06-20 18:56:26.483</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>bf8b4352-03ef-4bde-b35b-7e79eb8c4450</id>
    <name>Kit de 5 Calcinhas Cós Alto em Cores Lisas Variadas</name>
    <bar_code>10</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02skof237d,https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02skptmj41,https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02sksmrfd0,https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02skr86z3f,https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02skvfwbaa,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{Variadas,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134211-7r98o-lssu02skof237d,"calcinha cos alto","calcinha cintura alta ","calcinha confortavel ","calcinha que modela o corpo"}</slug>
    <description>Esse modelo calcinha Cós alto, foi feito a partir de uma calcinha Conforto . Seu cós duplo , que afunila na parte de cima , modela o corpo apertando mais na altura da cintura , fazendo o efeito semelhante ao de uma cinta , sem abrir mão do conforto ! Calcinha confeccionada em tecido microfibra de poliéster, elastano e forro em algodão. Possui cós alto em tecido duplo para maior conforto, acabamento em elástico de poliamida super fino, esta peça tem um toque de sensualidade e o conforto para o usa diário.  Cores disponíveis: Preto, Branco, Vinho, Cinza, Azul Marinho, Satin, Romance, Azul BB, Nude e Vermelho  OBS: Neste kit, todas as cores são pré definidas, enviamos todo o kit no tamanho selecionado na hora da compra  Medidas: P: Cintura 62-69, Quadril 87-94 M: Cintura 70-77, Quadril 95-102 G: Cintura 78-85, Quadril 103-110 GG: Cintura 86-93, Quadril 111-118</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/348566408/11420153082?uls_trackid=502o7d6m00cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbpx4dtk4fx3</url_product>
    <created_at>2024-06-20 19:45:50.053</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>bf4c0bfb-44b8-4947-ab7a-942cb7f9a614</id>
    <name>Conjunto Lingerie Sutiã E Calcinha Com Cintura Dupla E Sutiã Pala Reforçada Com Arco</name>
    <bar_code>10</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lw98ylsnhzte7d,https://down-br.img.susercontent.com/file/br-11134207-7r98p-lla0l5dm4lrw71,https://down-br.img.susercontent.com/file/br-11134207-7r98p-lla0l5go04sr02,https://down-br.img.susercontent.com/file/br-11134207-7r98s-lla0l5akbvij18,https://down-br.img.susercontent.com/file/br-11134207-7r98r-lla0l5akda2zfe,https://cvf.shopee.com.br/file/api/v4/11110107/mms/br-11110107-6kfkp-lw991qmgcmly8c.16000081717801367.mp4}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{PRETO,BRANCO,CHOCOLATE,"ROMANCE ",VERDE}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lw98ylsnhzte7d,"conjunto  calsinha e sutiao","kit de calsinha e sutao","peça intima ","ligerie  reforçada "}</slug>
    <description>Uma das peças indispensáveis no seu guarda roupa, moderno ,confortável e de qualidade ,pensado com carinho pra você. Produzido em poliamida e forro algodão, possui bojo para melhor contorno do colo, e arco para maior sustentação. Um conjunto  reforçado com elástico barra 30 em sua pala , para melhor ajuste ao corpo.  E a calcinha com cintura dupla.    composição do sutiã : 92%poliamida 08%elastano forro 100%algodão bojo100poliéster  composição da calcinha: 92%poliamida o8%elastano forro 100%algodão  Tabela De Medidas: Sutiã P : 62 á 64 cm M: 64 á 66 cm G: 66 á 68 cm GG:70 á 72 cm  Calcinha  P: 60 á 62 cm M: 62 á 64 cm G: 64 á 66 cm GG: 66 á 68 cm</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/903558358/22924307172?uls_trackid=503h4qvr00cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bc8ytx6i7ubu</url_product>
    <created_at>2024-06-23 20:25:51.649</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>8a072d47-39ca-405e-b784-9b970148b283</id>
    <name>Facial Bioaqua Creme 30g Cuirdado Facial Clareador Creme Redutor De Poros Abertos Cuirado Facial</name>
    <bar_code>8</bar_code>
    <price>48</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rd54-luc7ozd5zlqe56,https://down-br.img.susercontent.com/file/sg-11134201-7rd4z-luc7owl026qte4,https://down-br.img.susercontent.com/file/sg-11134201-7rd5y-luc7p0rxxauqa1,https://down-br.img.susercontent.com/file/sg-11134201-7rd6c-luc7p1xu7zmxe2,https://down-br.img.susercontent.com/file/sg-11134201-7rd5i-luc7ovfnqonv92,""}</image>
    <size>{Padrão,"","","","",""}</size>
    <color>{Branco,"","","",""}</color>
    <slug>{"Facial Bioaqua Creme 30g Cuirdado Facial Clareador Creme Redutor De Poros Abertos Cuirado Facial","Facial Bioaqua Creme 30g","Creme para espinhas","Creme para tira espinhas","Creme facial para remove espinhas",Aquinase}</slug>
    <description>Descrição do produto em inglês após português Detalhes: Detalhes Creme facial, para ser tratado para acne, escelas Descante DE Capacidade: 30 gramas Descante DE Ingredientes: Extrato de planta abaixo Descante DE Desempenho especial: Aloe planta natural extrato na pele Descante DE Pode evitar que o sol causa redução e queima de trânsito, também possui efeitos anti-inflammatórios e promove o metabolismo, regeneração de músculos da pele injuros e recuperação de tecidos. Descante DE Suaves e aliviando das parafusos sob o tempo de desligamento. Fornece boa pele inferior conjunctivada, valor conveniente, pode promover a saúde de de sair e evitar a formação de raios Descante DE Peças aplicáveis: Rosto Descante DE</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Facial-Bioaqua-Creme-30g-Cuirdado-Facial-Clareador-Creme-Redutor-De-Poros-Abertos-Cuirado-Facial-i.1103280964.19697668491?sp_atk=711da9ff-dbaf-4a3b-8a3f-5cfeed2ddf68&amp;xptdk=711da9ff-dbaf-4a3b-8a3f-5cfeed2ddf68</url_product>
    <created_at>2024-06-27 03:37:14.245</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>1548c071-51df-46b6-9f7e-eac83b12e2a9</id>
    <name>Kit 3 Sutiã Soutien Tomara Que Caia Sotian 3 Tiras Reforçado Com Bojo Conforto</name>
    <bar_code>10</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rcca-lrysy7hll1eoc1,https://down-br.img.susercontent.com/file/sg-11134201-7rcee-lrysybrvba05ec,https://down-br.img.susercontent.com/file/sg-11134201-7rcet-lrysy9bwvzfta6,https://down-br.img.susercontent.com/file/sg-11134201-7rce1-lrysye6fslcg1c,https://down-br.img.susercontent.com/file/sg-11134201-7rce7-lrysyfcm2vro50,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{"https://down-br.img.susercontent.com/file/sg-11134201-7rcca-lrysy7hll1eoc1 ","sutiao tomara que caia ","sutiao sem alsa","sutiao  legal","sutiao bonito "}</slug>
    <description>ATACADÃO DO JOÃOSutiã tomara que caia confeccionado com bojo casquinha; o produto possui um detalhe delicado no centro do decote, aderindo mais charme a peça. A parte de trás possui tiras elásticas (strappy) com fecho em colchetes triplo proporcionando maior segurança.TAMANHOS E MEDIDAS:Tamanho P: Veste manequim 36/38Tamanho M: Veste manequim 40/42Tamanho G: Veste manequim 44Tamanho GG: Veste manequim 46RECOMENDAÇÕES: Lavagem somente manual / Não usar alvejante / Proibido usar secadora / Não passar / Não limpar a seco.NOSSA EQUIPE ESTA A SUA DISPOSIÇÃO!!!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/1180629165/23592852413?uls_trackid=503h823r00cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bc92b9bs6emu</url_product>
    <created_at>2024-06-23 20:38:35.199</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>9ac43d95-7678-44bd-82f6-1a15985ecc11</id>
    <name>oné de beisebol de jeans lavado bordado para homens de alta qualidade vintage y2k chapéus de pai gorras hombre</name>
    <bar_code>9</bar_code>
    <price>108</price>
    <image>{https://ae01.alicdn.com/kf/Sbf297ff54f0a47589ae2c85feb9af850J/2023-Nova-marca-de-luxo-meu-bon-de-beisebol-de-jeans-lavado-bordado-para-homens-de.jpg_.webp,https://ae01.alicdn.com/kf/S0bebd2cbba014750a82f3ec122b857cdk/2023-Nova-marca-de-luxo-meu-bon-de-beisebol-de-jeans-lavado-bordado-para-homens-de.jpg_.webp,https://ae01.alicdn.com/kf/S70bc811ede014d2dabd99e9c8f1be241n/2023-Nova-marca-de-luxo-meu-bon-de-beisebol-de-jeans-lavado-bordado-para-homens-de.jpg_.webp,https://ae01.alicdn.com/kf/S23b7061109be42b282f7243cac505e90K/2023-Nova-marca-de-luxo-meu-bon-de-beisebol-de-jeans-lavado-bordado-para-homens-de.jpg_.webp,https://ae01.alicdn.com/kf/S0d3980e97cb843b39979502473323a963.jpg_640x640.jpg_.webp,""}</image>
    <size>{Padrão,"","","","",""}</size>
    <color>{Preto,Azul,"Azul com Preto","Azul com Branco",""}</color>
    <slug>{boné,"boné ","boné azul","boné azul ","boné jeans","boné jeans "}</slug>
    <description>Material Algodão, Denim País de Origem China Gênero Unissex Estilo de Chapéu Boné de Baseibol Estoque com desconto 33 Estoque restante 2997744 Enviado de China Continental Descrição Do Produto 100% novo. Por favor leia feedbacks positivos de nossos clientes satisfeitos.   Estilo do estilo: Casual Tipo: Snapback Aba: 7cm de comprimento Altura da marca: 12,5 cm de altura: 12,5 cm Tamanho: 54-62cm ajustável</description>
    <quantity>100</quantity>
    <url_product>https://pt.aliexpress.com/item/1005005916888523.html?aff_fcid=93b986a802c7443b86d296cf95600c44-1719706152298-06559-_oEqlE0m&amp;aff_fsk=_oEqlE0m&amp;aff_platform=api-new-link-generate&amp;sk=_oEqlE0m&amp;aff_trace_key=93b986a802c7443b86d296cf95600c44-1719706152298-06559-_oEqlE0m&amp;terminal_id=f2dda39d4b5f461bb38377b36e307199&amp;afSmartRedirect=y</url_product>
    <created_at>2024-06-30 00:33:15.767</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>79a327c5-6545-44f2-abf1-762a7a451620</id>
    <name>Drenagem Linfática Massageador Orbital Spin Relax Premium</name>
    <bar_code>7</bar_code>
    <price>108</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rd56-lwx6sb3mj27d2e,https://down-br.img.susercontent.com/file/sg-11134201-7rd5p-lwx6saon4zii1f,https://down-br.img.susercontent.com/file/sg-11134201-7rd6p-lwx6scfwkesp0b,https://down-br.img.susercontent.com/file/sg-11134201-7rd48-lwx6sd2xmpje99,"",https://cvf.shopee.com.br/file/f36798681c9c04c76826ed954375daa7}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Branco com Roxo","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-7rd5p-lwx6saon4zii1f,"","","",""}</slug>
    <description>Área de Aplicação Corpo Peso do Produto 500g Aparelho eletrônico Sim Equipamento de massagem Pistola de massagem Área de Apoio para Lesões Costas &amp; Lombar Duração da Garantia 1 Mês Tipo de Garantia Garantia do Fornecedor Quantidade 1 Estoque 5773 Enviado de Rio de Janeiro Descrição Do Produto MASSAGEADOR CORPORAL RELAX SPIN TONE ORBITAL 360º 110V - YDTECH  - Portátil e prático, ajuda a eliminar gorduras e esculpir o corpo, através de seu movimento orbital e poderosa vibração. - Com um giro de 2.500 RPM e quatro acessórios, é ideal para uso a qualquer hora em qualquer lugar. - Tonifica os braços, alivia a tensão e o stress nos ombros e nas costas, define e esculpe o abdômen, modela e tonifica os quadris, modela e alivia a tensão muscular nas pernas e coxas, relaxa o músculo cansado e dolorido da panturrilha e com o uso da lixa remove  calosidades e pele seca dos pés, além de proporcionar uma deliciosa e relaxante massagem nesta região. - Possui alta Rotação (2500 RPM) Vibrações Vigorosas Relaxa os músculos contraídos Intensidade da Massagem Regulável.  CARACTERÍSTICAS: - Modelo: Relaxe Spin tone; - Potência máxima de rotação: 2500 RPM - Botão de ajuste rápido: Sim - Voltagem: 110V - Frequência: 60Hz - Potência: 25W - Cor disponível: Branco com azul - Regulagem de velocidade: Sim - Cabo ergonômico: Sim - Portátil e prático: Sim - Grau de rotação: 360° - Acompanha tampa protetora com tecido para revestir os discos;  PRECAUÇÕES: - O acessórios são fixados no massageador por pressão, sendo assim realize as trocas com cuidado para evitar danificar o produto.  Itens Inclusos: - 01 Disco de massagem ondulado; - 01 Disco de massagem com 9 gomos; - 01 Disco com lixa para pés; - 01 Disco de massagem liso;</description>
    <quantity>700</quantity>
    <url_product>https://shopee.com.br/Drenagem-Linf%C3%A1tica-Massageador-Orbital-Spin-Relax-Premium-i.335240457.10764806798?sp_atk=e668a0e8-2d46-4554-932d-7b4c3538d726&amp;xptdk=e668a0e8-2d46-4554-932d-7b4c3538d726</url_product>
    <created_at>2024-06-27 03:27:42.874</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>09738ac7-604b-452d-8f33-e777b4c8e6d7</id>
    <name>Boné Aba Curva Feminino e Masculino NY New York Rasgadinho Unissex Todas as Cores</name>
    <bar_code>9</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54ej3gb0b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54fntic67,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54eki0r51,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54f8dob06,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54ffeij03,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfko-lquq8qqch4b1bd.16000081706026049.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Cinza,Bege,"Azul bb","Branco com Dourado","Preto com Rosa"}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqupn54ej3gb0b,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Material Algodão, Denim País de Origem China Gênero Unissex Estilo de Chapéu Boné de Baseibol Estoque com desconto 33 Estoque restante 2997744 Enviado de China Continental Descrição Do Produto 100% novo. Por favor leia feedbacks positivos de nossos clientes satisfeitos.   Estilo do estilo: Casual Tipo: Snapback Aba: 7cm de comprimento Altura da marca: 12,5 cm de altura: 12,5 cm Tamanho: 54-62cm ajustável</description>
    <quantity>100</quantity>
    <url_product>https://shopee.com.br/Bon%C3%A9-Aba-Curva-Feminino-e-Masculino-NY-New-York-Rasgadinho-Unissex-Todas-as-Cores-i.1063230022.22497312334?sp_atk=363f44a9-79ab-4ba7-b6d8-fc5dc0317569&amp;xptdk=363f44a9-79ab-4ba7-b6d8-fc5dc0317569</url_product>
    <created_at>2024-06-30 00:57:10.311</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>77af28ee-a21a-4d1c-8b9f-a2499973bfd1</id>
    <name>Bone chapeu country viola caipira chora viola sertanejo agro</name>
    <bar_code>9</bar_code>
    <price>88</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkk6jy7uvzvs10,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkk6jy7uulbc48,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkk6jy7uxeg812,"","",""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Preto com vermelho","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkk6jy7uvzvs10,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Material Algodão País de Origem Brasil Estilo de Chapéu Boné Estoque 80 Enviado de Paraná Descrição Do Produto BONÉ RURAL´S DENIM  MODELO: Trucker  Características: - Cada produto da RURAL´S DENIM BKF é elaborado e fabricado pensando no seu conforto e seu estilo; - Bordado em alta definição; - Tecido de ótima qualidade; - Aba curvada costurada; - Se encaixa perfeitamente em qualquer tipo de cabeça; - Correia de ajuste na parte de trás; - Ideal para usar em rodeios, festas Country, exposições e principalmente no dia a dia!  Obs: Fotos tiradas em um estúdio dentro, reproduzindo fielmente o produto.  - Todos os nossos produtos são a pronta entrega e realizamos a postagem em no máximo 12 horas;  - Após a compra você terá um canal de atendimento online direto com nossa loja!  - Todos nossos produtos são REVISADOS antes de serem embalados;  - Caso ainda tenha alguma dúvida nossas atendentes terão o maior prazer em responder!   Agradecemos sua visita e desejamos uma ÓTIMA Compra!   GARANTIA:  Esse produto tem garantia assegurada pelo fabricante em um prazo de 30 dias.  Observações: Produto vendido a unidade. Os produtos podem apresentar pequenas alterações na cor devido flash da câmera fotográfica, configurações dos monitores, configurações dos dispositivos móveis e lotes de fabricação do produto pelo fornecedor. Porém, garantimos que as características do produto (quantidade, peso, matéria prima e funções) não serão</description>
    <quantity>20</quantity>
    <url_product>https://shopee.com.br/bone-chapeu-country-viola-caipira-chora-viola-sertanejo-agro-i.747498515.14291005497?publish_id=&amp;sp_atk=27f6d819-7523-4e7d-bd6c-e441c5a14f53&amp;xptdk=27f6d819-7523-4e7d-bd6c-e441c5a14f53</url_product>
    <created_at>2024-06-30 02:39:04.302</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>750f8529-3757-4d09-b662-3b1eb68b7322</id>
    <name>KIT 2 Bermuda Sarja Colorida Lycra Jeans Premium Masculino Diversas Cores</name>
    <bar_code>11</bar_code>
    <price>148</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltadxr86bi7wf1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltadxr86cwscba,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltaeg7da2rxcbf,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltaeg7da46hs7f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltaeg7da5l28bf,""}</image>
    <size>{Padrão,"","","","",""}</size>
    <color>{"Preto com marron","Preto com café","Preto com cinza","Cinza com marron","Cinza com café"}</color>
    <slug>{"Short Masculino","Short Masculino jeans","Short jeans",Short,"Short ","Short preto"}</slug>
    <description>Estilo Atlético, Básico, Estilo de Rua Tamanho Grande Não Tipos de Fechos Botões País de Origem Brasil Ocasião Casual Tipos de Bermudas Bermudas Material Algodão Estampa Lisa Plus Size Não Altura da Cintura Cintura Média Quantidade ALTA Tamanho Do Pacote 0.8KG Estoque 2806 Enviado de São Paulo Descrição Do Produto COR ENVIADO ALEATORIAMENTE  Shorts de excelente qualidade, altíssima resistência e super confortável.  Encaixa em variados e diversificados estilos e looks, sejam eles casuais ou moderno ambos com muito estilo.  Ótima qualidade com ótima costura, possui uma modelagem que se ajusta perfeitamente seu corpo e com ótimo caimento.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/KIT-2-Bermuda-Sarja-Colorida-Lycra-Jeans-Premium-Masculino-Diversas-Cores-i.410693248.23592927013?publish_id=&amp;sp_atk=96190d5c-0e36-4377-9ac0-075b2b3d5fce&amp;xptdk=96190d5c-0e36-4377-9ac0-075b2b3d5fce</url_product>
    <created_at>2024-06-30 03:15:56.813</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>1b72214c-f73e-4009-8704-55fc6e81ba8b</id>
    <name>bermuda masculina sarja jeans AX</name>
    <bar_code>11</bar_code>
    <price>108</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-22100-kwkzazexaiiv83,https://down-br.img.susercontent.com/file/0d9d4adcfb477467dc5dec79dc923b60,https://down-br.img.susercontent.com/file/4f726cffa3805e54fecaf9ba059ebbae,https://down-br.img.susercontent.com/file/1864ea24447e9a58b6a3ed30062e6f18,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lochn1d6s8nged,""}</image>
    <size>{38,40,42,44,46}</size>
    <color>{Azul,Bege,Marron,Preto,Cinza}</color>
    <slug>{"Short Masculino","Short Masculino jeans","Short jeans",Short,"Short "}</slug>
    <description>Estilo Básico, Estilo de Rua, Sob Medida Tamanho Grande Sim Tipos de Fechos Zíper País de Origem Brasil Ocasião Casual Tipos de Bermudas Bermudas Estampa Lisa Plus Size Sim Material Sarja Quantidade 1 Estoque 2496 Enviado de São Paulo Descrição Do Produto bermuda masculina sarja jenas AX  shorts bermuda masculina  sarja Lacoste premium  bermuda masculina lacoste de sarja luxo   ATENÇÃO!!!!!!!!!!!! ,  Bermuda Masculina Sarja Colorida  Produzido com material de qualidade Tabela de Tamanho : 38-48  Ótimo acabamento, ideal para qualquer ocasião, cores vivas, modelo social. 100% Algodão Envio Imediato </description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/bermuda-masculina-sarja-jeans-AX-i.626824222.20653598615?sp_atk=6a4a2050-bf4e-4dd1-897d-81eae0eaa552&amp;xptdk=6a4a2050-bf4e-4dd1-897d-81eae0eaa552</url_product>
    <created_at>2024-06-30 03:04:37.178</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>64a984c2-59e5-49c7-aa3b-418c16aba397</id>
    <name>kit com 15 Tanga Feminina Tanguinha Sexy Moda Íntima Revenda Melhor Preço</name>
    <bar_code>10</bar_code>
    <price>48</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvy6p1b0,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvzl9h68,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvws4l13,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvtyzp29,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvvdk569,""}</image>
    <size>{PADRÃO,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lufelwsvzl9h68,"kit calcinha",calsinha,"calsinha fio dental","tanga "}</slug>
    <description>Kit 15 tanga veste 38/40  *Sortidas</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/392309660/21699240503?uls_trackid=503h1upq01cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bc8wmj3ivwyh</url_product>
    <created_at>2024-06-23 20:09:07.525</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>f3df7db6-9410-412f-ba82-9d551229f6a7</id>
    <name>Mini Processador Elétrico de Alimentos Portátil c/ 3 lâminas de Aço Inox USB 250 ml Bivolt-ENVIO IMEDIATO PARA TODO BRASIL</name>
    <bar_code>7</bar_code>
    <price>28</price>
    <image>{https://ae01.alicdn.com/kf/Af6f95f86bafe4dafa43eca159c7e9983q.png,https://ae01.alicdn.com/kf/A7660f2e9c708491385cba65b7d59686ae.png,https://down-br.img.susercontent.com/file/c028761f0e13a225db54e4ea28e05f7a,https://ae01.alicdn.com/kf/Aff7198c1237b4d11b71e6ee9e6e9cd38e.png,https://down-br.img.susercontent.com/file/588eea9b630cf18620fc565d5c98ac1e,https://cvf.shopee.com.br/file/e2d56eaac530109125584f201dff88e8}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Cor Sortida","","","",""}</color>
    <slug>{https://ae01.alicdn.com/kf/Af6f95f86bafe4dafa43eca159c7e9983q.png,"","","",""}</slug>
    <description>**Mini Triturador De Alimentos Elétrico Portátil Com 3 Laminas**  Facilidade com um toque!  Com o Triturador Elétrico, com ele você pica, tritura seus alimentos em 10 segundos  Ser prático, rápido e eficaz são umas das mais diversas qualidades que esse mini processador portátil USB da 123 Útil traz. Conta com três lâminas para aumentar a eficácia e desempenho. E o melhor, é capaz de triturar alho, pimentas, abóbora, vegetais, amendoim, nozes e até carne!  É de fácil utilização, bastando somente pressionar o botão para que o triturador faça seu trabalho, trazendo conforto na hora de fazer aquela receita. A bateria com bastante autonomia, carregamento via USB e tamanho portátil é perfeita para levar a qualquer lugar.  CONTEÚDO DA EMBALAGEM:  -1 Mini processador de alimentos portátil USB 250 ml -1 Manual de Instruções -1 Cabo USB  ESPECIFICAÇÕES:  Capacidade: 250ml Tensão: 3.7V Corrente de Trabalho: 10A Tensão de Carregamento: 5V Material: ABS, PC, Aço Inoxidável  *****Cores enviadas de forma aleatória-***  DIMENSÕES:  Produto: 120X100X100 mm Embalagem: 12 x 5 x 8,2 cm</description>
    <quantity>150</quantity>
    <url_product>https://pt.aliexpress.com/item/1005004896833383.html?spm=a2g0o.categorymp.prodcutlist.4.5ccdBcZYBcZY0m&amp;pdp_ext_f=%7B%22sku_id%22%3A%2212000030935115721%22%7D&amp;utparam-url=scene%3Asearch%7Cquery_from%3A</url_product>
    <created_at>2024-06-26 03:36:28.234</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>0f2b134c-9054-47af-8d5f-445134b2ae2d</id>
    <name>Mini vestido de strass Colorblock feminino, vestido de festa pescoço simulado</name>
    <bar_code>3</bar_code>
    <price>380</price>
    <image>{https://ae03.alicdn.com/kf/S370029f2d0ae47abbb7295acf4c5e22cB.jpg,https://ae03.alicdn.com/kf/Se1b857bb7df3492b89ed19fce5dda921P.jpg,https://ae03.alicdn.com/kf/S7e39368adf0845a791ad2eb948e697b85.jpg,https://ae03.alicdn.com/kf/Sd7fba1759a6446b99f8656b433654b719.jpg,"",""}</image>
    <size>{P,G,GG,XGG,""}</size>
    <color>{preto,"","","",""}</color>
    <slug>{https://ae03.alicdn.com/kf/S370029f2d0ae47abbb7295acf4c5e22cB.jpg,"vestido sexy","vestido curto","vestido manga longa","vestido preto"}</slug>
    <description>Composição do material Fibra sintética Data de lançamento Outono de 2023 Tipo de Fecho zíper Tipo de perfil A Tipo de tecido Mistura de algodão Tipo REGULAR Idade MEIA IDADE Lugar de origem China (continente) Número do modelo RY2222 Estação Outono/Inverno Decote Garganta alta Cintura Fatores naturais Estilo da manga REGULAR Comprimento dos vestidos Mini acima do joelho Decoração Diamantes Comprimento da manga (cm) Completo Tipo de modelo Sólida Silhueta bainha Estilo Sexy e Clube Material COTTON,POLIÉSTER Sexo MULHERES Origem CN (Origem) Nome da marca PANELAS RFORX Elasticidade Alongamento Alto Tipo de ajuste Até CN Cantão</description>
    <quantity>50</quantity>
    <url_product>https://pt.aliexpress.com/item/1005006152662594.html?aff_fcid=139ec4a12e354ac2ae773c75faf17daf-1722825456604-00670-_opuZ5mT&amp;aff_fsk=_opuZ5mT&amp;aff_platform=api-new-link-generate&amp;sk=_opuZ5mT&amp;aff_trace_key=139ec4a12e354ac2ae773c75faf17daf-1722825456604-00670-_opuZ5mT&amp;terminal_id=5276ed167f9b490a8247ada6eeae7327&amp;afSmartRedirect=y</url_product>
    <created_at>2024-08-05 02:44:18.972</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>00084c1a-cd41-4566-ae2b-d05d95fc218d</id>
    <name>Tênis 2024 esporte laser moda caminhada feminino masculino</name>
    <bar_code>2</bar_code>
    <price>100</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98q-llike8zpnod258,https://down-br.img.susercontent.com/file/br-11134207-7r98q-llike8zpp2xi43,https://down-br.img.susercontent.com/file/br-11134207-7r98r-llike8zptamub5,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lf4htyzmd5wf9c,https://down-br.img.susercontent.com/file/br-11134207-7r98r-llike8zprw2ed0,https://cvf.shopee.com.br/file/535e4162fafb2d52fe7095447ba19073}</image>
    <size>{34,36,38,40,42}</size>
    <color>{preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98q-llike8zpp2xi43,"","","",""}</slug>
    <description>_SEJAM BEM VINDOS A NOSSA LOJA__ SÓ TRABALHAMOS COM FOTOS REAIS DOS PRODUTOS  ESTAMOS ENVIANDO NORMALMENTE TODOS OS PRODUTOS  Os produtos são novos? Todos os nossos produtos são novos.  O produto é o mesmo da foto que irei receber:? Sim. As fotos são originais do produto.  Os produtos são de boa qualidade:? Trabalhamos apenas com produtos que têm qualidades indiscutíveis e a preços acessíveis.  A mercadoria está disponível a pronta entrega? Todas as mercadorias são de pronta entrega.  Qual o prazo para meu produto ser despachado? O prazo para a postagem da mercadoria é de até 24horas uteis, após a confirmação do pagamento. O prazo de entrega contratado passa a vigorar a partir desta data.  Se eu quiser trocar, como faço? Caso queira trocar a cor ou tamanho, basta nos informar por e-mail que passaremos os procedimentos para a troca. Lembramos que os gastos com frete são por conta do comprador. Não aceitamos devolução se o produto estiver 100% de acordo com o anuncio.  Horário De Funcionamento: De SEGUNDA A SEGUNDA 24HORAS   Tabela De Medidas  33-----------21,3cm 34-----------21,7cm 35-----------22,5cm 36-----------23cm 37-----------23,5cm 38-----------24cm 39-----------25cm 40-----------26cm 41-----------27,5cm 42-----------28cm 43-----------28,5cm 44-----------29c</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/538165655/23436205691?uls_trackid=4vujf1ld00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vrgnhv8dsm</url_product>
    <created_at>2024-06-04 17:41:47.320</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>97d12fa6-31a3-4e8f-94d5-37bdf6c5ed48</id>
    <name>Kit 2 Pares Tênis Masculino Casual Esportivo Confortável Ótima Qualidade A Pronta Entrega Envio Imediato</name>
    <bar_code>2</bar_code>
    <price>180</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7dc6bxa1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7ddkwd86,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7dezgta5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7dge193f,"",""}</image>
    <size>{38,36,38,40,42}</size>
    <color>{"Preto com branco","Preto com marrom","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7dc6bxa1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr64iz7dezgta5,"","",""}</slug>
    <description>O produto anunciado é um calçado que sempre estará na moda, pelo seu estilo super versátil que combina com todas as ocasiões e roupas, ele é perfeito para se usar nos dias esportivos. Ele foi construído com materiais de altíssima qualidade, solado em micro anti-derrapante, garantindo maior conforto e segurança no momento de caminhar. ________________________________________________________________________________  - Tabela de medidas: 34 - 22,5cm 35 - 23,0cm 36 - 24,0cm 37 - 24,5cm 38 - 25,5cm 39 - 26,0cm 40 - 27,0cm 41 - 27,5cm 42 - 28,5cm 43 - 29,5cm ________________________________________________________________________________  - Dúvidas Frequentes:  - Produto vai na caixa; - Produto em estoque; - Fotos reais do produto; - Envio imediato após confirmação do pagamento; - Atendimento personalizado. ________________________________________________________________________________  Restou alguma dúvida? Entre em contato com nossa equipe, estamos sempre prontos para atender você.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/1177162286/22797324445?uls_trackid=4vujduhn02rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vqmx74z95y</url_product>
    <created_at>2024-06-04 17:59:13.551</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>ebe5e12c-beec-4056-b6cb-91c161ec5e8c</id>
    <name>Aparador Removedor de Pelos Elétrico/Portátil para Nariz/Orelha/Rosto / Depilador Facial</name>
    <bar_code>7</bar_code>
    <price>32</price>
    <image>{https://down-br.img.susercontent.com/file/8d00f2497b4b282bc5f7930effd4c4e7,https://down-br.img.susercontent.com/file/5ae67f2e5612ba47b93132818067b928,https://down-br.img.susercontent.com/file/1d953d0c25a634235e93a1d976f6ddde,https://down-br.img.susercontent.com/file/3307b6b682c980c735611f326fb6ee32,https://down-br.img.susercontent.com/file/a6e013259451fbe6bcb68e9f0eaabb44,https://cvf.shopee.com.br/file/e6128282e516956567f03f8f8ed44ba1}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/8d00f2497b4b282bc5f7930effd4c4e7,"","","",""}</slug>
    <description>Com esse produto fica muito mais fácil se cuidar! Este aparador de pelos possui lâmina de aço inoxidável giratório de alta eficiência e designer leve e ergonômico que proporcionam precisão de corte, suavidade e segurança. Podendo ser usado para aparar pelos no nariz, orelhas, sobrancelha etc. Possui corpo emborrachado e tampa protetora da lâmina para sua segurança e suavidade. Pode ser utilizado com 1 pilha AA (não inclusa).  Especificações Técnicas:  O pacote inclui: 1x Aparador de pelos. 1x Tampa para a Lâmina. 1x Pincel para limpar.</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/Aparador-Removedor-de-Pelos-El%C3%A9trico-Port%C3%A1til-para-Nariz-Orelha-Rosto-Depilador-Facial-i.417730810.13492908965?sp_atk=a24e29a0-9939-455b-92a7-ed719e0c5d17&amp;xptdk=a24e29a0-9939-455b-92a7-ed719e0c5d17</url_product>
    <created_at>2024-06-27 03:11:18.099</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>59179d4d-5138-4328-8ff9-52bb5460b8d0</id>
    <name>Vestido lastex ciganinha c/alça babado rodadinho, moda blogueirinha</name>
    <bar_code>3</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134201-23010-gifm03xyyzlve8,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsilk5q3ihx7d7,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvaoiw1w126p28,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvaoiw1vy91t24,"",""}</image>
    <size>{"Único ","","","",""}</size>
    <color>{verde,preto,laranja,rosa,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsilk5q3ihx7d7,https://down-br.img.susercontent.com/file/br-11134201-23010-gifm03xyyzlve8,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvaoiw1w126p28,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvaoiw1vy91t24,""}</slug>
    <description>Vestido lastex  alça com babado em tecido crepe dunnas  super confortável   MEDIDAS  comprimento 87 cm / com alça 123cm busto sem esticar 75cm esticando 115cm veste a partir do 38 ao 44</description>
    <quantity>200</quantity>
    <url_product>https://shopee.com.br/product/415673396/11677039809?uls_trackid=4vt9tla900mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b7zocbn8d7c4</url_product>
    <created_at>2024-05-30 16:16:07.966</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>540172b1-a2f3-45e9-80aa-4936c66c8ebd</id>
    <name>Vestido curto ciganinha lastex com decote e laço</name>
    <bar_code>3</bar_code>
    <price>200</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq71p2fa5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq733mv96,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwqgzwg391,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq70ahz96,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqo65gvw5bsz73,""}</image>
    <size>{"unico 36 ao 42","","","",""}</size>
    <color>{Vinho,Azul,Preto,Vermelho,Branco}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwqgzwg391,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq733mv96,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq71p2fa5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqo65gvw5bsz73,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lq47jwq70ahz96}</slug>
    <description>estido ciganinha curto, total de lastex com manguinha, recorte na frente e laço, cores super tendência primavera verão.</description>
    <quantity>100</quantity>
    <url_product>https://shopee.com.br/product/600885444/22292581343?uls_trackid=4vtqn4n100ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8ctzpopvx2b</url_product>
    <created_at>2024-06-01 17:37:07.561</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>1029261f-f7a0-45a7-a6a8-2e92eddf3590</id>
    <name>Vestido feminino bodycon de retalhos de malha pura de strass sexy para quem quer brilar</name>
    <bar_code>3</bar_code>
    <price>220</price>
    <image>{https://ae01.alicdn.com/kf/Sa1b17e5e862149128f1e83e68b2dc407Z.jpg,https://ae01.alicdn.com/kf/S6896cb2417224ccf9dc2868f7677edf35.jpg,https://ae01.alicdn.com/kf/S3f7eeaba074b45a582977e178f3817243.jpg,"","",""}</image>
    <size>{P,G,GG,XGG,""}</size>
    <color>{preto,"","","",""}</color>
    <slug>{https://ae01.alicdn.com/kf/Sa1b17e5e862149128f1e83e68b2dc407Z.jpg,"vestido sexy","vestido curto","vestido manga longa","vestido preto"}</slug>
    <description>Estilo: sexy Tipo: Bodycon Materiais: 100% poliéster Decote: Pescoço simulado Manga Estilo: Manga comprida Comprimento: Mini Tipo do padrão: Planície Decoração: Rhinestone, malha pura Tipo do ajuste: Magro Ocasião: Diariamente, Night Out O pacote inclui: 1 * vestido Elasticidade do tecido: ligeiro estiramento Sheer: Semi-Sheer Cuidado Instruções: lavar a mão, não limpar a seco</description>
    <quantity>100</quantity>
    <url_product>https://pt.aliexpress.com/item/1005006217031513.html?aff_fcid=4bcbfeae0c4944ae96ea5673d3203959-1722823079755-08434-_omufQNN&amp;aff_fsk=_omufQNN&amp;aff_platform=api-new-link-generate&amp;sk=_omufQNN&amp;aff_trace_key=4bcbfeae0c4944ae96ea5673d3203959-1722823079755-08434-_omufQNN&amp;terminal_id=5276ed167f9b490a8247ada6eeae7327&amp;afSmartRedirect=y</url_product>
    <created_at>2024-08-05 02:28:20.785</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>eb047322-633e-4e23-abf1-181145576f04</id>
    <name>Mini vestido sem mangas Slim-Fit com pescoço baixo e Halter Back, Sexy Summer Party Dress</name>
    <bar_code>3</bar_code>
    <price>132</price>
    <image>{https://ae01.alicdn.com/kf/S00d8b9280cbf456d828c5b7714961b07G.jpg,https://ae01.alicdn.com/kf/Scad0fde3a31b4bcd8be804d183e81a06e.jpg,https://ae01.alicdn.com/kf/Sff74aeb1ab754c399fa7839add1e7743f.jpg,https://ae01.alicdn.com/kf/Sa98be684266d4560907b3a9a8a502a26E.jpg,https://ae01.alicdn.com/kf/Sb210691779174c419ff56a6ffb5414e2g.jpg,""}</image>
    <size>{P,G,GG,XGG,""}</size>
    <color>{preto,"","","",""}</color>
    <slug>{https://ae01.alicdn.com/kf/S00d8b9280cbf456d828c5b7714961b07G.jpg,"vestido sexy","vestido curto","vestido manga longa","vestido preto"}</slug>
    <description>Data de lançamento Verão de 2024 Tipo de tecido POLIÉSTER Tipo REGULAR Idade JÚNIOR Lugar de origem China (continente) Estação Verão Decote Gol V Estilo da manga Alça de Espaguete Comprimento dos vestidos Mini acima do joelho Decoração Apliques Tipo de modelo Floral Silhueta bainha Estilo Sexy e Clube Material POLIÉSTER Sexo MULHERES Origem CN (Origem) Elasticidade Médio Strecth Tipo de ajuste Ajuste fino CN Cantão</description>
    <quantity>50</quantity>
    <url_product>https://pt.aliexpress.com/item/1005006853163581.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.9.4293ZM8VZM8Vtc&amp;gps-id=pcDetailTopMoreOtherSeller&amp;scm=1007.40000.327270.0&amp;scm_id=1007.40000.327270.0&amp;scm-url=1007.40000.327270.0&amp;pvid=ad2e3450-6b1b-477c-afc2-09052f210a86&amp;_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40000.327270.0,pvid:ad2e3450-6b1b-477c-afc2-09052f210a86,tpp_buckets:668%232846%238116%232002&amp;pdp_npi=4%40dis%21BRL%2194.00%2118.86%21%21%21111.65%2122.41%21%402103266e17228226766364239ea183%2112000038520097637%21rec%21BR%21%21ABX&amp;utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A#nav-specification</url_product>
    <created_at>2024-08-05 02:35:33.005</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>b412acd0-5cd4-4d8d-8821-2664a89cf2f5</id>
    <name>Kit 2 Tênis Masculino 320d Lançamento Mais Vendido Super Promoção</name>
    <bar_code>2</bar_code>
    <price>180</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98p-llux2e2oo8qf9f,https://down-br.img.susercontent.com/file/br-11134207-7r98p-llux2e2or1vb56,https://down-br.img.susercontent.com/file/br-11134207-7r98q-llux2e2osgfr0c,https://down-br.img.susercontent.com/file/br-11134207-7r98s-llux2e2otv07d1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m51ighoyjya88f.webp,""}</image>
    <size>{38,40,42,44,46}</size>
    <color>{"cinza e azul","branco e cinza","azul com preto e amarelo","preto com amarelo","preto com preto e branco"}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98p-llux2e2oo8qf9f,https://down-br.img.susercontent.com/file/br-11134207-7r98p-llux2e2or1vb56,https://down-br.img.susercontent.com/file/br-11134207-7r98q-llux2e2osgfr0c,https://down-br.img.susercontent.com/file/br-11134207-7r98s-llux2e2otv07d1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m51ighoyjya88f.webp}</slug>
    <description>Tênis 320D, masculino, cores, Branco, Cinza, Marinho, Preto/Amarelo e Preto/Preto. Confeccionado em material alternativo. Seu design inovador com silicone injetado diretamente no tecido, torna possível a aplicação de texturas por todo modelo, o que traz modernidade e maior durabilidade ao calçado. Fechamento por cadarço para ajuste perfeito. Revestimento interno em tecido acolchoado. Palmilha macia removível que facilita no momento da higienização. O Solado com tecnologia que garante conforto e maciez para você ter total liberdade de movimento. Modelo ideal para treinos e rotinas agitadas!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/1196084619/20799201126?uls_trackid=4vujdu0p00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8vqmhgyqctw</url_product>
    <created_at>2024-06-04 18:07:44.567</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>bf332b12-e810-4e0c-88ef-36dbd32ca6ae</id>
    <name>Macaquinho Canelado com argola short saia</name>
    <bar_code>17</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-m50ckxxc4lo270@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4j1tiuzwwg194@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqtxs16jwjr79e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lqtwqc2vxpmrcb,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luiodcgxiag0fc,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-luzir5nd5opx2b.16000081715033085.mp4}</image>
    <size>{"unico 36 ao 38","","","",""}</size>
    <color>{Bege,Preto,Braco,Laranja,Bronze}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-m50ckxxc4lo270@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4j1tiuzwwg194@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m4s0oejzjm7pe5@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m15qxi8m6l4j38@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-m2yms1bxa29xdb@resize_w450_nl.webp}</slug>
    <description>A Fly Girl Brasil agradece a sua visita             Nosso Macaquinho feminino  short saia curta  com 9% elastano deixando um ajuste           perfeito ao corpo sendo look perfeito do casual ao elegante, ideal para dias Calor    _produzindo com malha canelada de alta qualidade sempre com toque macio com bojo!             *****tamanho único veste do 36 ao 38*****    _Produção própria. Feito com muita dedicação e capricho!      _Loja  com  mais de 10 mil estrelas e avaliações positivas!    _Duvidas estamos a disposição no chat.</description>
    <quantity>200</quantity>
    <url_product>https://shopee.com.br/product/400401910/22829188599?uls_trackid=4vtb89cn00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b81n5rm992oh</url_product>
    <created_at>2024-05-30 20:01:33.812</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>5af961ea-e85b-482b-9066-0bbfbca8bff9</id>
    <name>Vestido CRUZADO tubinho colado curto festa balada feminino</name>
    <bar_code>3</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98q-lmovcywu0q4717,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln9fh4n6011f4d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln9fgs4ub0ec53,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln9fgs4ub0mzd3,https://down-br.img.susercontent.com/file/br-11134207-7r98p-lmovcyx40bueed,""}</image>
    <size>{"unico 36 ao 40","","","",""}</size>
    <color>{"preto ","azul bebê",roxo,rosa,laranja}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lty23jkhswpg28,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln9fh4n6011f4d,https://down-br.img.susercontent.com/file/br-11134207-7r98q-lmovcywu0q4717,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln9fgs4ub0ec53,https://down-br.img.susercontent.com/file/br-11134207-7r98p-lmovcyx40bueed}</slug>
    <description>🚚Envio Super Rápido  ✅DK Modas  ✅Garantimos com toda certeza cada informações digitada aqui abaixo:  ▪ Tecido Suplex ▪ Com Bojo ▪Tamanho ÚNICO veste do 36 ATÉ NO MÁXIMO 40.   ✅Informações do produto:  As fotos são reais do produto, temos vídeo para confirmação. Produto de alta qualidade tecido confortável que se encaixa perfeitamente no seu corpo.   ✅DICAS ▪ ideal para festa/baladas com casaco, blazer, bota,salto,tênis,etc. consegue compor vários looks maravilhosos 🥰✅  ✅Garantia:  Ao receber seu produto se atente e confirmar se não tem nenhum problema, só conclua seu pedido após a conferência, porquê depois de concluir o pedido a shopee não aceita mais devolução/reembolso. as peças são verificadas um por um antes do envio para termos certeza que irá receber em perfeita condições.   ⚠️APROVEITE E COMPRE AGORA NOSSO ESTOQUE PODE ESGOTAR A QUALQUER MOMENTO!⚠️  qualquer dúvida fique a vontade de pergunta estaremos a disposição !  BOAS COMPRAS!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/518776879/22492246527?uls_trackid=4vtb0uah00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b81ghj3a9fxs</url_product>
    <created_at>2024-05-30 19:21:23.476</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>68fb1a25-5c07-4cfb-93d2-21bf618cf025</id>
    <name>KIT 2 CAMISOLA LISA ROSA E PRETO</name>
    <bar_code>10</bar_code>
    <price>72</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrbs4dkrq884,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrbs4dhylc2d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrbs4dqe001f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrbs4dnkv4e4,"",""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"ROSA E PRETO","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lukrbs4dhylc2d,"","","",""}</slug>
    <description>Camisola é super confortável para quem vai viajar ou ficar em casa. Com alças reguláveis permite um ajuste melhor ao corpo. O decote é em V e possui um laço em cetim que deixa a peça ainda mais delicada. Super confortável e fresquinha.  TABELA DE MEDIDA:  P veste 38/40 - Busto - 35 cm | Comprimento da alça até a ponta - 60cm M veste 40/42 - Busto 37cm | Comprimento da alça até a ponta - 62 cm G veste 42/44 - Busto 42cm | Comprimento da alça até a ponta - 68 cm GG veste 44/46 - Busto 44cm | Comprimento da alça até a ponta - 70 cm</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/878161504/23592653268?uls_trackid=4vua1ouo01ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8oxm766fffd</url_product>
    <created_at>2024-06-03 15:10:43.018</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>5dfcfa5a-2b01-458a-bae6-6e7340f61077</id>
    <name>Kit 3 pijamas baby dool sortidos suede personagem</name>
    <bar_code>10</bar_code>
    <price>120</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf4xfjmm7hz18,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf4xfjmksxjea,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf3ib81s6ry45,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf3ib81tlce56,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf3ib81uzwu03,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"Sortidos ","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-lhf3ib81uzwu03,"pijama para dormir","pijama confortavel","pijama de personagens ","pijama engraçado "}</slug>
    <description>Enviamos no mesmo dia!!!!!   Você vai se apaixonar por esse pijama, além de super fofo e lindo é fabricado no material poliamida, super confortável , macio e um toque suave o que proporciona um conforto maior quando se veste, super macio e confortável, é tudo que você precisa para suas noites ficaram ainda melhor!!!   P- veste 36, M veste - 38, G veste- 40- GG- veste 44   Malha 90% poliéster e 10% elastano     Antes de realizar a compra, CERTIFIQUE-SE de que marcou a opção desejada CORRETAMENTE e que os dados para faturamento da sua Nota Fiscal e do Endereço de Entrega, estejam CORRETOS. Após a compra, esses dados não podem ser alterados pelo Vendedor!!    </description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/406141173/22291362643?uls_trackid=4vua0vvd00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8owzroaoic8</url_product>
    <created_at>2024-06-03 14:25:53.184</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>7e354ac7-b19a-4b25-a093-b44fa8d11ba1</id>
    <name>Luminária Relógio Com Formato De G-Speaker Caixa De Som E Carregamento Por Indução</name>
    <bar_code>14</bar_code>
    <price>140</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewngm3mo5e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewng114019,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewngghcw26,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewng3u8w8c,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewngav344d,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfks-lvb6vv5qoz0x66.16000081715739539.mp4}</image>
    <size>{Pagrão,"","","",""}</size>
    <color>{Branco,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lt72ewng114019,"Luminária Relógio","Luminária Relógio Com Formato De G-Speaker ","Luminária Relógio Com Formato De G-Speaker Caixa De Som",Relogio}</slug>
    <description>- Relógio, luminária com formato de G, possuindo uma caixinha de som e carregamento por indução - 7 modos de iluminação - Ouça as suas músicas de uma forma mais moderna - Via Bluetooth  Visite e siga a nossa loja para mais novidades! Temos diversos produtos variados com preços imperdíveis! Venha conferir 🛍️💨 Após as compras, não se esqueça de nos avaliar e de confirmar a entrega! O seu feedback é de extremo importância para nós 🌟  Para quaisquer dúvidas, acesse o chat do vendedor! 😊</description>
    <quantity>150</quantity>
    <url_product>https://shopee.com.br/Lumin%C3%A1ria-Rel%C3%B3gio-Com-Formato-De-G-Speaker-Caixa-De-Som-E-Carregamento-Por-Indu%C3%A7%C3%A3o-i.1209041550.23892605238?sp_atk=256f343f-ced8-49db-8836-762efc31e3f5&amp;xptdk=256f343f-ced8-49db-8836-762efc31e3f5</url_product>
    <created_at>2024-05-26 02:56:58.985</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>38ceab90-1f02-4c60-934a-1d3ce0fa6866</id>
    <name>Facial Bioaqua Creme 30g Cuirdado Facial Clareador Creme Redutor De Poros Abertos Cuirado Facial</name>
    <bar_code>8</bar_code>
    <price>48</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rd54-luc7ozd5zlqe56,https://down-br.img.susercontent.com/file/sg-11134201-7rd4z-luc7owl026qte4,https://down-br.img.susercontent.com/file/sg-11134201-7rd5y-luc7p0rxxauqa1,https://down-br.img.susercontent.com/file/sg-11134201-7rd6c-luc7p1xu7zmxe2,https://down-br.img.susercontent.com/file/sg-11134201-7rd5i-luc7ovfnqonv92,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Branco,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-7rd54-luc7ozd5zlqe56,"Facial Bioaqua Creme 30g","Creme para espinhas","Creme para tira espinhas","Creme facial para remove espinhas"}</slug>
    <description>Descrição do produto em inglês após português Detalhes: Detalhes Creme facial, para ser tratado para acne, escelas Descante DE Capacidade: 30 gramas Descante DE Ingredientes: Extrato de planta abaixo Descante DE Desempenho especial: Aloe planta natural extrato na pele Descante DE Pode evitar que o sol causa redução e queima de trânsito, também possui efeitos anti-inflammatórios e promove o metabolismo, regeneração de músculos da pele injuros e recuperação de tecidos. Descante DE Suaves e aliviando das parafusos sob o tempo de desligamento. Fornece boa pele inferior conjunctivada, valor conveniente, pode promover a saúde de de sair e evitar a formação de raios Descante DE Peças aplicáveis: Rosto Descante DE</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Facial-Bioaqua-Creme-30g-Cuirdado-Facial-Clareador-Creme-Redutor-De-Poros-Abertos-Cuirado-Facial-i.1103280964.19697668491?sp_atk=711da9ff-dbaf-4a3b-8a3f-5cfeed2ddf68&amp;xptdk=711da9ff-dbaf-4a3b-8a3f-5cfeed2ddf68</url_product>
    <created_at>2024-06-27 03:37:34.787</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>83513674-3069-4d3a-ac7c-4735db5979c4</id>
    <name>Padrão Ondulado Bordado Com Alça De Ombro , Bolsa Pequena Quadrada</name>
    <bar_code>15</bar_code>
    <price>56</price>
    <image>{https://down-br.img.susercontent.com/file/5332a8839f4ec496927666bfb1abc317,https://down-br.img.susercontent.com/file/73aaf39fe2928d3d8ab0e40da6673741,https://down-br.img.susercontent.com/file/a4f9b1fc08a808177f364c8239ed00ca,https://down-br.img.susercontent.com/file/b601e1538b51b4107159163611b990ca,https://down-br.img.susercontent.com/file/515a4682c45bcafcbfe2065c108b095c,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Branco,Preto,"","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/515a4682c45bcafcbfe2065c108b095c,https://down-br.img.susercontent.com/file/5332a8839f4ec496927666bfb1abc317,B,"Bolsa estilosa","Bolsa Branca"}</slug>
    <description>Cor: branco, cáqui, preto  Material: PU  Estilo de tendência de bagagem: bolsa quadrada pequena  Tamanho da bagagem: pequeno  Elementos populares: Bordado  Textura do forro: PU  Forma do saco: quadrado horizontal  Método de abertura: Zíper  Métodos de processamento: superfície macia  Dureza: média a macia  Peças de transporte: Alça Macia  Tipo de bolsa externa: Bolso interno de remendo  Com ou sem intercalação: nenhum  Número da raiz da cinta: único</description>
    <quantity>100</quantity>
    <url_product>https://shopee.com.br/2022-Vers%C3%A3o-Coreana-Do-Padr%C3%A3o-Ondulado-Bordado-Com-Al%C3%A7a-De-Ombro-Bolsa-Pequena-Quadrada-i.1006215031.24104397799?publish_id=&amp;sp_atk=8b5e0428-d09f-49ab-843d-3cef0ef06b37&amp;xptdk=8b5e0428-d09f-49ab-843d-3cef0ef06b37</url_product>
    <created_at>2024-05-27 23:44:26.797</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>a518bf5d-250c-4f49-b7de-f7b50652037c</id>
    <name>Bolsa Feminina Lorena Média Shopbag Bordada Linea</name>
    <bar_code>15</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/7fbaf703f059835a3adf7e7b578f950ehttps://down-br.img.susercontent.com/file/7469cebf97d183b33388b59b7cf6819a,https://down-br.img.susercontent.com/file/7fbaf703f059835a3adf7e7b578f950e,https://down-br.img.susercontent.com/file/04cd742caff84736f38336c21e9c80b0,https://down-br.img.susercontent.com/file/0b79365112b4d6cecde77c6a3cad13f6,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ls8e1g4v80lp3c,https://cvf.shopee.com.br/file/48cd4897cd0cc0a4bf56aa513a1016f7}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,Branco,Rosa,Caramelo,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/7fbaf703f059835a3adf7e7b578f950e," https://down-br.img.susercontent.com/file/080cb3cb8a126bfe57681f3af5231541.webp",https://down-br.img.susercontent.com/file/04cd742caff84736f38336c21e9c80b0,https://down-br.img.susercontent.com/file/7fbaf703f059835a3adf7e7b578f950ehttps://down-br.img.susercontent.com/file/7469cebf9,"bolsa  delicada "}</slug>
    <description>Bolsa Feminina Lorena Média Shopbag Bordada Linea  Com um bordado lindo e diferenciado de todo o mercado, a Lorena Linea ShopBag vem para inovar o seu visual.  Sofisticação, qualidade e preço justo por um produto que vai te deixar mais segura e bela! Deixe seu look mais lindo com o melhor preço e excelente qualidade. Ideal para levar coisinhas que não deixamos para trás!   - Feita em material Couro Sintético Cedro Bordado na parte exterior. - Forrado em tecido no interior - Alça de mão e alça transversal com regulagem. - A bolsa tem as medidas 24C x 19A x 10L cm.(cabe celular grande, chave, carteira pequena, batom, maquiagem, etc.) - Alça mede aproximadamente 90 cm.  ATENÇÃO, antes de concluir sua compra, revise seu pedido e verifique se: - O endereço cadastrado na sua conta mercado livre está correto, pois a entrega será realizada nesse endereço. - Você selecionou corretamente a cor e o tamanho do produto desejado; - A quantidade de produtos selecionada está correta de acordo com o desejado.  - A previsão de entrega do seu produto através do campo frete, no próprio anúncio.  PERGUNTAS FREQUENTES: 1) As cores são idênticas as fotos? R: Elas podem sofrer pequenas variações de acordo com a tela do seu pc ou celular, mas são bem próximas a realidade.  2) Vocês demoram enviar? R: O prazo de postagem é de 24 HORAS ÚTEIS. O período de envio depende da região e também do tipo de frete contratado. Note que a data prevista para entrega antes da compra, é apenas uma DATA ESTIMADA e pode ter alterações ao decorrer do envio. Após a postagem, o envio é de inclusiva responsabilidade da transportadora.  AGRADECEMOS PELA COMPRA :)</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/431103460/12193367121?uls_trackid=5007hmsq00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9zh6k7v3uma</url_product>
    <created_at>2024-06-11 01:52:04.713</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>ef369438-2c58-42d6-b39f-143fb4cc30ed</id>
    <name>Mala Grande - GYM NBA - Estampada Academia Viagem Mala Masculina Feminina Unissex Resistente Fitness</name>
    <bar_code>15</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/sg-11134201-7rd53-lvaff91cizb1bd,https://down-br.img.susercontent.com/file/sg-11134201-7rd5p-lvaffautv5cd3b,https://down-br.img.susercontent.com/file/sg-11134201-7rd4u-lvaffe3d4m3u44,https://down-br.img.susercontent.com/file/sg-11134201-7rd3q-lvafffm0wmh9d8,https://down-br.img.susercontent.com/file/sg-11134201-7rd6r-lv9acyvout1t6b,""}</image>
    <size>{PADRÃO,"","","",""}</size>
    <color>{Preto,Cinza,Pink,Azul,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/sg-11134201-7rd53-lvaff91cizb1bd,https://down-br.img.susercontent.com/file/sg-11134201-7rd5p-lvaffautv5cd3b,https://down-br.img.susercontent.com/file/sg-11134201-7rd3q-lvafffm0wmh9d8,https://down-br.img.susercontent.com/file/sg-11134201-7rd4u-lvaffe3d4m3u44,"mochila top"}</slug>
    <description>SEJA BEM VINDO!  É ideal para você que anda sempre na correria e precisa de praticidade.   Essa bolsa mala possui alça transversal ajustável, oferecendo conforto e agregando valor ao seu estilo no dia a dia.  •Oque Acompanha o Produto? 1 - Mala   • Especificações do Produto Tamanho aproximado: 24cm Altura  51cm Largura  22cm Profundidade  - Gênero: Unissex.  - Indicado para: Dia a Dia.  - Modelo da Bolsa: Mala Grande - Alça: Ajustável e de mão - Fechamento: Com zíper. - Dimensões Aproximadas Podem variar por conta de costura ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  (Mandaremos conforme pedido e NÃO modelos escolhidos via CHAT- Exemplo: comprou dois preto no pedido, e mandou no chat que quer um preto e um dourado, informamos que conforme nossa demanda não temos com lembrar de fazer a alteração quando cair seu pagamento, pedimos encarecidamente para fazer o pedido certinho mandaremos conforme pedido)  PARA ESCOLHER AS CORES DIFERENTE,È SÒ ESCOLHER  UMA COR DE CADA VEZ  E IR ADICIONANDO NO CARRINHO, E DEPOIS FINALIZAR SUA COMPRA NO CARRINHO -  Ficou com dúvida, de como fazer isso ? nos chame antes de efetuar a compra...  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  Ótimo custo beneficio.  Fotos ilustrativas do produto.  Por favor se atente aos detalhes para evitarmos transtornos.  Em caso de Dúvidas nos chame no chat, estamos disponíveis para atende-lo!</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/551365770/23397500393?uls_trackid=503hgdro00cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bc98r7e9bcf9</url_product>
    <created_at>2024-06-23 21:29:34.491</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>f88e8beb-8105-4421-97a7-e98f46f54304</id>
    <name>Bolsa Mala Academia Viagem Imagem Fitness Transversal Casual Masculino e Feminina</name>
    <bar_code>15</bar_code>
    <price>92</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pmbc65f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pqj1idb,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pp4h2c0,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pgp2eff,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pi3mu9b,https://down-tx-br.vod.susercontent.com/api/v4/11110103/mms/br-11110103-6kfko-lwa80jakw3g6eb.default.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,"Azul claro ",Rosa,Roxo,"Vermelho claro "}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pmbc65f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pnpwm9a.webp," https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pp4h2c0",https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvoj337pqj1idb," bolsa grande "}</slug>
    <description>Produtos de Qualidade - Envio em 48 Horas   Bolsa de mão com alça transversal removível e regulável  Bolsa com 2 compartimentos (um em específico para peças sujas, molhada  Bolso principal com amplo espaço para carregar carteira, necessaire, cadernos roupas e outros objetos do dia-a-dia  Bolso lateral para carregar celular, canetas e outros objetos  Bolso lateral específico para calçado.  CARACTERÍSTICAS .Bolsa Feminina Fitness Academia E Mala De Viagem Material: Nylon e Forro em Poliéster e algodão. Tamanho: 55x22x26 cm  Se você quiser comprar o mesmo produto em cores diferentes, você pode adicioná-lo ao carrinho de compras antes do pagamento e depois pagar no carrinho de compras</description>
    <quantity>200</quantity>
    <url_product>https://shopee.com.br/product/393887125/22693056356?uls_trackid=5007hih300rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9zh2zu9qjqa</url_product>
    <created_at>2024-06-11 01:34:30.174</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>2da169db-dd8b-44a4-949f-9ee2b83d0368</id>
    <name>Short Cirre Couro Fake Tecido Cirre Cintura Alta Com Cinto - Preto</name>
    <bar_code>4</bar_code>
    <price>60</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134201-22120-rmyeqfxyjblvc1,https://down-br.img.susercontent.com/file/br-11134201-22120-rq0lqaxyjblv80,https://down-br.img.susercontent.com/file/br-11134201-22120-v216tlxyjblvf8,https://down-br.img.susercontent.com/file/br-11134201-22120-v6bdugxyjblv83,https://down-br.img.susercontent.com/file/br-11134201-22120-zka2g1wyjblv0a,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134201-22120-rmyeqfxyjblvc1,"short ","short cintura alta ","short para sair ","short confortável "}</slug>
    <description>💖 Informações do produto:  Short em Couro Ecologico, Com cinto ajustavél  🌈Material: Couro Fake Tecido Cirre  👍 Características: O material é leve e confortável, estica consideravelmente pois é levemente emborrachado.  Os recortes ajudam a cinturar o corpo, criando curvas.  😍 【Dimensões 】 P Cintura - 36/38 Quadril-90cm comprimento-35cm   M Cintura - 40 Quadril-96cm comprimento-36cm  G Cintura- 42 Quadril-100 comprimento-37cm   GG Cintura- 44 Quadril-106cm comprimento -37cm 💖 【Fechamento】  Detalhe no Cinto   🤩 【Seleção de várias cores】 Cores Preto   😊 Nosso serviços:  • Envio em 1 dia útil • Fotos reais tiradas pela loja • Embalagem segura • Atendimento rápido e eficiente • Empresa totalmente confiável   💖 Feedback Dependemos da satisfação dos clientes para ter sucesso. Portanto, seu feedback positivo é extremamente importante para nós. Se você está satisfeito com nossos produtos, por favor reserve um minuto para deixar seu feedback positivo. Obrigado!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/919330771/20269242307?uls_trackid=4vvv7cqs00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9tg7v984ew9&amp;is_from_login=true</url_product>
    <created_at>2024-06-10 02:12:05.246</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>97a3089c-6005-4c32-9cf8-076c461d95e5</id>
    <name>Shorts Jeans Feminino Bermuda Cintura Alta Destroeyd Blogueira Oferta Explosiva</name>
    <bar_code>4</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3toc90hkjf2f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3toc90hk4ke4,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3toc90x0sbea,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3tr2xe330t29,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3tr53cwzzvce,""}</image>
    <size>{36,38,40,42,44}</size>
    <color>{"Azul claro","Azul escuro ","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3toc90x0sbea,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lr3tr53cwzzvce,"short para sair ","short ","short blogueirinha "}</slug>
    <description>1- Peças de alta qualidade que não desbota, zipper não prende, botões não soltam. 2-  Modelagem impecável a peça vai se ajustar perfeitamente ao seu corpo. 3- Acabamento perfeito cada detalhe pensando no seu conforto. 4- Envio imediato.  Nossos jeans valorizam as formas femininas através de um recorte anatómico (levanta bumbum) deixando tudo no lugar se ajustando perfeitamente ao corpo.  Composto por 100% algodão ajustam-se perfeitamente ao corpo feminino  MEDIDAS  As medidas são aproximadas e tem como base mulheres brasileiras “reais” podendo apresentar pequenas variações. NOSSOS TAMANHOS SERVEM PERFEITAMENTE EM 99% DAS NOSSAS COMPRADORAS.  Guia de tamanhos   Tamanho  Quadril cm	Comprimento cm	  Cintura cm 36                   86                   39                           72 38	               90     	       40	                      76 40	               94	               40	                      80 42	               98	               40	                      84 44	              102	               41	                      88 46	              106	               41	                      92  ALGUMA DUVIDA? ENTRE EM CONTATO PELO CHAT, TEMOS ATENDENTES 24H 7 DIAS PODE SEMANA.</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/420681722/4987874158?uls_trackid=4vvv7bvf00rq&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9tg76fn21h9&amp;is_from_login=true</url_product>
    <created_at>2024-06-10 02:19:07.747</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>bf99571b-0195-4199-b90f-a95022eb3277</id>
    <name>SHORT ALFAIATARIA FEMININO ZARA CINTURA ALTA COM ZÍPER NA LATERAL</name>
    <bar_code>4</bar_code>
    <price>68</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsydzjxu44,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewt2tt2858b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsyxyqv90f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewt0lwaxh92,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsvm3m9x22,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"Preto ","branco ","rosa ","bege ",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsydzjxu44,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsvm3m9x22,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsv24fci8f.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lotewsyxyqv90f,"short  feminino "}</slug>
    <description>SHORT SOCIAL BÁSICO TECIDO ALFAIATARIA MODELO ZARA COM ZÍPER NA LATERAL CINTURA ALTA.  COMPOSIÇÃO: 95% POLIÉSTER 05% ELASTANO  TAMANHOS:  P-VESTE 36/38 M-VESTE 40 G-VESTE 42 GG-VESTE 44  É UMA PEÇA DESENVOLVIDA ESPECIALMENTE PARA VOCÊ MULHER MODERNA, QUE GOSTA DE SE VESTIR BEM.  PRODUTO DE ÓTIMA QUALIDADE, DESENVOLVIDA COM TOTAL CONFORTO E ESTILO, PARA QUE NOSSOS CLIENTES SE SINTA SATISFEITO COM NOSSA MARCA.  *ENVIO IMEDIATO DA PEÇA *ENVIAMOS PARA TODO O BRASIL *FOTOS REAIS DO PRODUTO *COM NOTA FISCAL</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/437927074/22792672308?uls_trackid=4vvv7afo01rr&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b9tg5y1dt7uq&amp;is_from_login=true</url_product>
    <created_at>2024-06-10 02:35:09.952</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>c5de4ea9-8b3c-4f98-a723-554be3949eef</id>
    <name>Kit 2 Legging Elástico Exposto Academia</name>
    <bar_code>1</bar_code>
    <price>116</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpr3a8ff,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpoa5cb1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhppopsca,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpshuo33,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui8byj94nl19d,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfko-ltosiypdh5hb4c.16000081712204401.mp4}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{preto,cinza,"preto com cinza","cinza com mescla","preto com mescla"}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpshuo33,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lui8byj94nl19d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpr3a8ff,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhpoa5cb1,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltveoyhppopsca}</slug>
    <description>***O kit é composto por 2 Leggings ELÁSTICO EXPOSTO ***  *Para você que gosta de treinar com roupas diferentes, aqui temos uma ótima opção. *2 leggings MARAVILHOSAS que modelam o corpo e te deixam ainda mais bonita.  *Entre na nossa loja e confira todos os nossos produtos.*  Legging ELÁSTICO EXPOSTO:  *Cós com elástico exposto de compressão afinando a cintura. *Elástico com escrito brilhoso dando um charme especial na peça. *Se ajusta a todos os corpos dando um silhueta perfeita.   **TAMANHO** P veste manequim 34 a 36 M veste manequim 38 G veste manequim 40 GG veste manequim 42 a 44  Composição: 92% Suplex poliéster 8% elastano  *Tecido de ótima qualidade *Não desbota *Não precisa passar  **Pode escolher tamanhos variados, só entrar em contato conosco no chat.** **Postamos o produto em até 1 dia útil após a confirmação do pagamento.**</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/768750853/20498994084?uls_trackid=4vt4jq6v00mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b7vtmwb3ekj9</url_product>
    <created_at>2024-05-30 00:49:28.447</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>3a84dcaa-9c11-46b3-829a-421fd6d3766e</id>
    <name>Calça Flare Feminina Cintura Alta Com Bolsos Cores</name>
    <bar_code>1</bar_code>
    <price>100</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrqbgccpgnil9e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrzyri7ybmt7a2,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltmuow2x2s6h85,https://down-br.img.susercontent.com/file/br-11134207-7r98o-luhvdbu0b1ph82,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrqbgccp9mod18,""}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"Cinza xadrez",preto,vinho,Caramelo,Verde}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-luhvdbu0b1ph82,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrqbgccpgnil9e,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrqbgccp9mod18,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltmuow2x2s6h85,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lrzyri7ybmt7a2}</slug>
    <description>Venha conferir a nossa incrível coleção de calças Flare femininas!  Nossas calças Flare são perfeitas para quem busca um visual elegante e confortável ao mesmo tempo.  Com bolsos nas laterais e cintura alta, elas são ideais para o dia a dia, para o trabalho ou para ocasiões especiais.  Disponíveis em uma variedade de cores vibrantes, nossas calças Flare são versáteis e fáceis de combinar com diferentes estilos de blusas, camisas e sapatos. Além disso, oferecemos uma ampla gama de tamanhos para garantir que todas as mulheres encontrem o ajuste perfeito.   Fabricação Própria  Contem bastante elastano.  Material: Crepe de Malha  Cores Lisas  GARANTIMOS A COR ESCOLHIDA.  NÃO DESBOTA NÃO DA BOLINHA   GUIA DE TAMANHO CALÇA   P 36-38/ QUADRIL 96-100cm CINTURA 76-80cm COMPRIMENTO 1.06 CM M 40-42/ QUADRIL 104-108cm CINTUTA 84-88cm COMPRIMENTO 1.06 CM G 44-46/ QUADRIL 112-116cm CINTURA 92-96cm COMPRIMENTO 1.08 CM GG 48-50/ QUADRIL 120-124cm CINTURA 100-104 COMPRIMENTO 1.10 CM</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/product/887091203/22697349036?uls_trackid=4vt4enki00mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b7vppya7pego</url_product>
    <created_at>2024-05-30 00:19:08.976</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>aa0e9957-7764-4348-876b-ca18bd70e77a</id>
    <name>Calças Jogger Masculina com punho moda homem Estiloso</name>
    <bar_code>16</bar_code>
    <price>96</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvussyfrtxh18f.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvusguavlewl5a@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvusgn9jw4fq8f@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwu922a9sk9eb9@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvuschq6rfjq3c@resize_w450_nl.webp,https://cvf.shopee.com.br/file/api/v4/11110107/mms/br-11110107-6kfko-lvus8fvq5fw515.16000081716925590.mp4}</image>
    <size>{36,"","","",""}</size>
    <color>{Preto,Bege,jeans,"Marron Caramelo",Branco}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvuschq6rfjq3c@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvusgn9jw4fq8f@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwu922a9sk9eb9@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvusg6jgemqad0@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvusguavlewl5a@resize_w450_nl.webp}</slug>
    <description>Tipos de ajuste de calças Slim Fit Altura da Cintura Cintura Média Material Algodão Estilo Básico Estampa Lisa Tamanho Grande Não País de Origem Brasil Plus Size Não Quantidade 400 Tamanho Do Pacote 30CM Estoque 79 Enviado de Rio Grande do Norte Descrição Do Produto CALÇA JOGGER MASCULINO ✅envio imediato  ✅direto da fábrica ✅conforto,estilo e melhor preço    A Calça Jogger  é confeccionada em tecido de Sarja de alta qualidade para juntar a durabilidade, conforto e estilo em uma única peça. Esse modelo de calça jogger possui elástico e cordão no cós, para deixar o ajuste como desejar e se sentir livre. Possui também dois bolsos atrás, para guardar pequenos e médios itens, mas o detalhe da calça fica por conta dos elásticos na barra, proporcionando um estilo único e diferenciado. Tecido Sarja/Brim com elastano, proporcionando conforto e melhor mobilidade.   Característica 👇 - elástico na cintura e barra - ⁠2 bolsos frontais e 2 traseiros - ⁠cordão para ajuste - ⁠costura dupla reforçada  - ⁠modelo Jogger   Cores Disponíveis Preto Branco Bege Creme  Camarelo   🤔 PERGUNTAS FREQUENTES  ⤵️  - O PRODUTO É NOVO E ORIGINAL?  ✅ Sim , todos os nossos produtos são novos e originais direto do fabricante.  - TEM A PRONTA ENTREGA?  ✅ Sim , todos nossos produtos anunciados tem estoque ilimitado para envio imediato.  TABELA DE MEDIDAS CALÇA JOGGER  TAMANHO 38 Cintura frente 30cm Cintura esticando 47cm Comprimento 93cm Coxa frente 22cm  TAMANHO 40 Cintura frente 31cm Cintura esticando 50cm Comprimento 93cm Coxa frente 24cm  TAMANHO 42 Cintura frente 32cm Cintura esticando 52cm Comprimento 96cm Coxa frente 26cm  TAMANHO 44 Cintura frente 32cm Cintura esticando 54cm Comprimento 97cm Coxa frente 26cm  TAMANHO 46 Cintura frente 39cm Cintura esticando 57cm Comprimento 1 metro  Coxa frente 26cm   QUALIDADE E SATISFAÇÃO GARANTIDA OU SEU DINHEIRO DE VOLTA 🏅        •AINDA TEM ALGUMA DÚVIDA? ✅pode falar conosco via chat, nossa equipe está pronta pra te atender!</description>
    <quantity>800</quantity>
    <url_product>https://shopee.com.br/cal%C3%A7a-jogger-com-punho-el%C3%A1stico-masculino-promo%C3%A7%C3%A3o-i.449243547.23693054594?publish_id=&amp;sp_atk=2f549e1c-a6e5-4767-b36d-ee4ce30ffc06&amp;xptdk=2f549e1c-a6e5-4767-b36d-ee4ce30ffc06</url_product>
    <created_at>2024-06-30 04:18:31.336</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>2d1c6782-1170-4a27-8801-0242e8e23896</id>
    <name>Macaquinho Casual Manga Flare Listrado Moda Tendência Verão MIDI FESTA</name>
    <bar_code>4</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwsa4b8a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwv39770,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwtoor1b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnlm6fnypy953b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-llll6k8btt353a,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkq-lstddg6ho7bh1e.16000081710302353.mp4}</image>
    <size>{"Único 36 ao 44","","","",""}</size>
    <color>{PRETO,NUDE,VERDE,MILITAR,VERMELHO}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwh1kr2e@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwqvjvcb@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwjupn47@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwqvjvcb@resize_w1080_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lstcxzdwmnuj36@resize_w1080_nl.webp}</slug>
    <description>macaquinho Manga Flare Listrado   veste do 38 ao 44  material :  ROMANTIC MALHA FRIA  OBS: AS FOTOS NA MODELO É ORIGINAL AO PRODUTO*  Envio imediato após a confirmação do pagamento.  Nossos Macaquinhos são lindos e confortáveis para você usar onde quiser e como quiser , com tênis sandália, rasteirinhas. as cores estão lindas então não perca tempo e garanta o seu Macaquinho e faça seu pedido .  QUALQUER DUVIDA OU PERGUNTA É SÓ NOS CHAMAR NO CHAT ESTAMOS DISPONÍVEIS PARA TE ATENDER E BOAS COMPRAS 🛍️🛍️  ATENCIOSAMENTE : DOLCE ENCANTO 🛍️❤️</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/954396476/18473316936?uls_trackid=502nq49300cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bbpmvwrxagrs</url_product>
    <created_at>2024-06-20 18:32:44.475</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>d00bdfdb-bff8-4c2b-9eff-6dae8bcd4337</id>
    <name>Kit C/3 Calça Masculina Jeans Roupas Masculinas Fbrica</name>
    <bar_code>16</bar_code>
    <price>216</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lujc86jwk5n807,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lujc86jwprx02c,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lujc86jwlk7o51,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lujc86jwr6hg27,""}</image>
    <size>{38,40,42,44,46}</size>
    <color>{" Azul - Preto - Clara","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lujc86jwir2se9.webp,"Short Masculino jeans","Short jeans",Short,"Short "}</slug>
    <description>Marca jeans brasil demin Estilo Básico Estampa Lisa Tamanho Grande Não Altura da Cintura Cintura Média Tipos de Fechos Zíper Tipos de ajuste de calças Slim Fit País de Origem Brasil Plus Size Não Comprimento de calças Comprimento longo Material Jeans Quantidade 3 Estoque 65419 Enviado de Minas Gerais Descrição Do Produto ****JEANS DIRETO DA FÁBRICA****    Kit 3 Calça Jeans Masculina clara - média - Preta    Temos do tamanho 36 ao 48  *** FORMA PEQUENA, ACONSELHAMOS PEDIR UMA NUMERAÇÃO ACIMA!  **  O kit vai 3 modelos de calça diferentes uma da outra, conforme estoque!  Composição: 98% algodão 2% elastano  A pronta entrega.</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Kit-C-3-Cal%C3%A7a-Masculina-Jeans-Roupas-Masculinas-Fbrica-i.478445045.23797470886?publish_id=&amp;sp_atk=e5043616-3b27-4960-a43d-1453e9919a3e&amp;xptdk=e5043616-3b27-4960-a43d-1453e9919a3e</url_product>
    <created_at>2024-06-30 03:45:59.078</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>f8e0ed23-1439-4730-9141-6e92df013abc</id>
    <name>Boné Country Farm Bull Oferta Especial Original</name>
    <bar_code>9</bar_code>
    <price>98</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfprbw6e3nz27b,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfprbw6e52ji3d,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfprbw6e6h3yd2,https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfprbw6e7voe10,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lochn1d6s8nged,""}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Preto com vermelho","","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-lfprbw6e3nz27b,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Gênero Unissex Estilo de Chapéu Viseira Estoque 42765668 Enviado de Minas Gerais Descrição Do Produto O boné Farm Bulls é uma peça exclusiva, que combina estilo e qualidade em um único produto. Feito com materiais de alta qualidade, ele oferece um design moderno e confortável, perfeito para completar o visual de qualquer pessoa.  A parte frontal do boné apresenta o logotipo da Farm Bulls, uma marca reconhecida por seu estilo único e original. Além disso, o boné possui uma aba curva que protege os olhos do sol, e um fecho ajustável na parte traseira, que permite um ajuste personalizado e confortável para qualquer tamanho de cabeça.  Feito com materiais duráveis e resistentes, o boné Farm Bulls é projetado para durar por muito tempo, mesmo após muitos usos e lavagens. E para garantir a sua qualidade, a Platinum Couros oferece uma garantia de vendedor, para que você possa ter tranquilidade e confiança na sua compra.  O melhor de tudo é que o boné Farm Bulls está disponível pelo melhor preço do mercado. Combinando qualidade superior e um preço acessível, ele é uma escolha inteligente para quem deseja um acessório de moda durável e estiloso.  Se você procura um boné de excelente qualidade, estilo único e preço acessível, o boné Farm Bulls é a escolha certa para você. Adquira o seu agora mesmo e complete o seu look com muito estilo e personalidade. Não perca mais tempo!</description>
    <quantity>1000</quantity>
    <url_product>https://shopee.com.br/Bon%C3%A9-Country-Farm-Bull-Oferta-Especial-Original-i.360167550.17362819509?publish_id=&amp;sp_atk=ffca8804-3ac7-4005-913c-d2857c598ad2&amp;xptdk=ffca8804-3ac7-4005-913c-d2857c598ad2</url_product>
    <created_at>2024-06-30 02:47:45.724</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>7303e8a5-f353-42e4-8aa9-8ed1e2fe23f4</id>
    <name>Boné Aba Curva New York City NYC Modelo Aberto Fitão Trucker Hype Original Várias Cores NY Premium Fita Strapback Ajustável</name>
    <bar_code>9</bar_code>
    <price>76</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimh9ubrhd9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimha5kb1a5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimha45qlb9,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimh9yjgtba,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimha2r650d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimh9x4wd75}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{Preto,Branco,Caramelo,"Azul bebé",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lruiimh9ubrhd9,"boné ","boné azul","boné azul ","boné jeans"}</slug>
    <description>Material Algodão, Tecido Sarja País de Origem Brasil Gênero Unissex Estilo de Chapéu Bonés Aba Curva Quantidade 1 Tamanho Do Pacote 21CM Estoque 1071 Enviado de São Paulo Descrição Do Produto ---------- FRETE GRÁTIS --------- Participamos do Programa de Frete Grátis da Shopee. Antes de finalizar sua compra, selecione na página de pagamento marcado como “CUPOM SHOPEE“. Assim, você pode verificar se o Cupom se aplica à sua região.  ------------------------- ❓DÚVIDAS FREQUENTES ------------------------- ✅ Todos os produtos são a Pronta Entrega ✅ Envio em até 24 hs ✅ Fotos reais do produto ✅ Embalagem: Enviado em caixa para proteção, mantendo a forma original de fábrica  ------------------------- CARACTERÍSTICAS ------------------------- ✅  Marca: Hype (100% Original) ✅  Modelo: Aberto, Frente alta (Trucker) ✅  Aba: Curva moldável com 6 costuras reforçadas ✅  Fecho: Fitão de tecido ajustável (Strapback), fivela e esconderijo. ✅  Frontal estampado ✅  Lateral: com logo Hype “! “ Bordado ✅  Pequenos furos (ilhós bordado) para circulação de ar nas laterais e traseiros ✅  Parte interna: Viés, etiqueta Hype e etiqueta de Composição ✅  Composição: 100% Algodão ✅  Tecido: Sarja  QUALQUER DÚVIDA ESTAMOS À DISPOSIÇÃO, NOS CHAME NO CHAT PARA QUE POSSAMOS RESPONDER. OBRIGADO!</description>
    <quantity>50</quantity>
    <url_product>https://shopee.com.br/Bon%C3%A9-Aba-Curva-New-York-City-NYC-Modelo-Aberto-Fit%C3%A3o-Trucker-Hype-Original-V%C3%A1rias-Cores-NY-Premium-Fita-Strapback-Ajust%C3%A1vel-Aba-Curvada-i.1113245362.19097631510?sp_atk=dd1f2227-480e-4fcb-bac7-01a88d9c8887&amp;xptdk=dd1f2227-480e-4fcb-bac7-01a88d9c8887</url_product>
    <created_at>2024-06-30 01:41:02.465</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>c7f5f371-ef23-45c8-bde5-1ce92821fbe4</id>
    <name>Pijama Macaquinho de Lingerie em romantic e renda - cores aleatórias</name>
    <bar_code>10</bar_code>
    <price>100</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ln2ypqrtrjk4e6,https://down-br.img.susercontent.com/file/br-11134207-7r98r-ll58i3762vx2c7,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll58i376bbbq98,https://down-br.img.susercontent.com/file/br-11134207-7r98s-ll58i376cpw657,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ll58i376fj1260,""}</image>
    <size>{P,M,G,G,""}</size>
    <color>{"sistema escolhe a cor",vinho,preto,branco,Lilas}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40,https://down-br.img.susercontent.com/file/br-11134258-7r98o-lzp49gh02mud40}</slug>
    <description>Um macaquinho de lingerie rendado com fecho nas costas é uma peça feminina e sensual que combina conforto e sedução. Feito em renda delicada e macia, o macaquinho possui um design elegante, com alças finas ajustáveis e decote em V, realçando o busto de forma delicada.  O fecho nas costas torna a peça prática e fácil de vestir e remover, oferecendo um ajuste perfeito ao corpo. Além disso, o macaquinho possui uma modelagem que valoriza as curvas femininas, delineando a silhueta de maneira acentuada.  P veste 38 M veste 40 G veste 42 GG veste 44</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/287746426/22996799971?uls_trackid=4vua0umv00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8owyqj83xi3</url_product>
    <created_at>2024-06-03 14:43:36.817</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>7de00ca0-9acd-4d80-b093-644239f154a5</id>
    <name>Vestido Longo SUPLEX Empina Bumbum com Fenda e Costa Nua alça transado costa Moda Gringa Sexy Elegante</name>
    <bar_code>3</bar_code>
    <price>96</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltw9vbu93srpbc,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lta31s7hqgtw59,https://down-br.img.susercontent.com/file/br-11134207-7r98o-ltw9vbu92e798f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lu5rwk41yiz8b1,"",https://cvf.shopee.com.br/file/api/v4/11110107/mms/br-11110107-6kfkr-ltw9w3lyfg5w3c.16000081712657349.mp4}</image>
    <size>{"unico 36 ao 42","","","",""}</size>
    <color>{preto,branco,vermelho,"cinza Grafite",azul}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lta31s7hqgtw59.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvl12vn8un3j20@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwupch0uqtof48.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lwaaow3wqnpu10.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lta31s7hqhgg7f@resize_w1080_nl.webp}</slug>
    <description>Tecido SUPLEX - Tamanho único veste 36-42  (grande elasticidade) - Todas as peças forradas nos seios   Enviamos em até 24Hrs após a confirmação do pagamento.  Perguntas Frequentes   P: O tecido encolhe ao lavar?  R: Não encolhe após a lavagem.   ----------------------------------------------------  P: As peças possuem bojo? R: Não, pois são forradas. Não tendo a necessidade de sutiãs e não marca também ------------------------------------------------------ P: As peças são transparentes? R: Como o tecido é SUPLEX Premium, as peças não ficam transparentes.  Ocasiões: Festa, Balada, Dia-a-Dia, Casualmente</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/976843598/22297451741?uls_trackid=4vtqn37r00ji&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8ctyhp5ovab</url_product>
    <created_at>2024-06-01 17:29:43.449</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>7606899e-8560-4c68-b218-0662c726625d</id>
    <name>Kit 2 Calças Femininas Jeans Cós Alto Até o Umbigo Lycra </name>
    <bar_code>1</bar_code>
    <price>200</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdog86c9,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdvh2e70,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdwvmu46,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdpusm8b,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdn1nq05,https://cvf.shopee.com.br/file/98ccdb91acb82581f9a8c5bd557dff66}</image>
    <size>{34,36,38,40,42}</size>
    <color>{"Azul claro e azul aço","Azul claro e Preta ","Azul marinho e azul claro","Azul e preta ","Azul aço e preta "}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausm5izs3cc@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausm5lswz5b@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausm5rf6rb4@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausjdpusm8b@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljgausm5kecj0d@resize_w450_nl.webp}</slug>
    <description>- São modelos exclusivos que você precisa ter!  - Representante Oficial de Vendas da Vortex Jeans Jeans macio de excelente qualidade que não desbota e que veste muito bem! - Principais Características do Produto: - Composição do Jeans: 97% Algodão, 3% de Lycra. - Modelo Cintura Alta (Até o Umbigo) - Modelagem Levanta o Bumbum. - Botão Personalizado. - Zíper Super Resistente. - Dúvidas frequentes: - Contém Lycra/ Elastano? R: Sim, Contém 3% de lycra/Elastano se ajustando perfeitamente ao corpo. - São formas de tamanhos normal, pequeno ou grande? Devo comprar um número maior do que uso? R: Forma de tamanho NORMAL. Sugerimos que compre a numeração que costuma vestir. - São modelos Cintura Alta? R: Sim, Modelos Cintura Alta Até o umbigo. Proporciona-te muito mais segurança ao realizar todos os movimentos. A Modelagem é Levanta Bumbum. - Qual Prazo de envio? R: Todos os produtos são postados em MENOS de 24 horas úteis! - Guia de Tamanhos: Todas as medidas em cm e com a peça sem esticar:  34: Cintura: 48-52 / Quadril: 68 - 72  / Comprimento: 96  36: Cintura: 52-56 / Quadril: 72 - 76  / Comprimento: 97  38: Cintura: 56 - 60 / Quadril: 76 - 80  / Comprimento: 98  40: Cintura: 60 - 64 / Quadril: 80 - 84 / Comprimento: 100  42: Cintura: 64 - 68 / Quadril: 84 - 88  / Comprimento: 101  44: Cintura: 68 - 72 / Quadril: 88 - 92 / Comprimento: 102  46: Cintura: 72 - 76/ Quadril:  92 - 96 / Comprimento: 103</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/693322426/18997175707?uls_trackid=50204hor01cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bb7gu7kfezr3</url_product>
    <created_at>2024-06-17 21:42:23.462</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>1cfc6276-4a07-420c-86b7-d6cec169d7c2</id>
    <name>Calça Feminina Skinny Malha Crepe SEM Cinto Cintura Alta Qualidade Slim</name>
    <bar_code>1</bar_code>
    <price>80</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsle96ctiwwd26,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438o00olvwec,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438o1emlaf8a,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438outfjuv28,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo43a6v0egjrbe,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-lo43ivxw8vd873.16000081700055470.mp4}</image>
    <size>{"",P,M,G,GG}</size>
    <color>{CINZA,"VERDE MILITAR ","PRETO ","AZUL MARINHO",BRANCO}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438o00olvwec.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438pckpkcne9.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438oxlbhrdfb.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lo438p9stm182b.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsle96ctiwwd26.webp}</slug>
    <description>  Calça Feminina SEM CINTO COSTURA DUPLA POSSUI BOLSO POSSUI ELASTANO   Super estilosa, esteja sempre bem arrumada com essa calça em crepe, seja pra trabalho ou pra sair com amigos Modela o corpo pois estica  Super confortável   NOSSO PRODUTO SE DIFERENCIA PELA GRAMATURA DO TECIDO, NAO SE ENGANE COM COPIAS POR AI, VERIFIQUEM A QUALIDADE TECIDO PREMIUM  LEMBRANDO QUE ELAS ETICAM BEM POIS POSSUEM ELASTANO (LYCRA)  TAMANHO: P (36/38)Cintura: 68 cm Quadril: 80 cm M (38/40 )Cintura: 72 cm Quadril: 85 cm G (40/42)Cintura: 76 cm Quadril: 90 cm GG (44/46)Cintura: 80 cm Quadril: 95 cm  TODAS TEM O MESMO COMPRIMENTO 1,05</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/1097063286/21497496010?uls_trackid=502085et00cb&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bb7jmt218g63</url_product>
    <created_at>2024-06-17 21:56:21.881</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>2959db24-c3a3-4751-a0b3-9664055b3033</id>
    <name>Calça Legging Feminina Zero Transparência Cintura Alta Suplex Fifness Academia Esportiva Lisa</name>
    <bar_code>1</bar_code>
    <price>40</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1udme8ab,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uj8o0b8,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1u809d1f,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uat9ca5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uf0yo79,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkr-lvde43oc6w80da.16000081715872778.mp4}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"PRETO ","MARINHO ","VINHO ",CINZA,""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uf0yo79.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uhu3kd1.webp,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1uat9ca5,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvddct1u809d1f,"roupa para esporte "}</slug>
    <description>Calça Legging Feminina Zero Transparência Cintura Alta Suplex Fifness Academia Esportiva Lisa  Preço com desconto ate acabar estoque Calça Ideal para o uso do dia a dia, para usar na academia, para usar no passeio, para o trabalho.  ENTREGA RÁPIDA EM 24 HORAS CONFORTÁVEL A renomada legging de suplex é a escolha predileta das mulheres, oferecendo uma composição leve que modela o corpo, além de proporcionar excelente custo-benefício. Versátil para todas as atividades, seja malhar, correr, caminhar, praticar yoga ou usar no dia a dia.  Comprometidos com a sua satisfação, garantimos que nossas calças não são transparentes quando usadas no tamanho adequado, não formam bolinhas e são confeccionadas apenas com tecidos de alta qualidade.  Oferecemos um guia de tamanhos padrão para facilitar sua escolha:  P (36/38) M (38/40) G (40/42) GG (42/44)   Compre com confiança, pois as imagens do produto são reais, podendo haver variações de cores conforme as configurações do seu monitor. Dúvidas? Estamos aqui para ajudar, basta enviar sua pergunta.  também oferecemos produtos como:  calça feminina calça legging calça suplex calça fitnes calça moda calça jeans feminina calça calça pantalona calça legging feminina calça cargo calça masculina calça alfaiataria feminina calça jeans calça dunas calça de novidade calça de moda 2024</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/755760311/22492832882?uls_trackid=501vqirj00cl&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bb796ewwxq6w&amp;is_from_login=true</url_product>
    <created_at>2024-06-17 20:56:19.597</created_at>
    <frete></frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>36b2cfb3-db36-4082-9c1b-f4d9a295b65c</id>
    <name>Bloqueador de Ar Original Redutor De Conta De Água Top Até 65% na Redução</name>
    <bar_code></bar_code>
    <price>30</price>
    <image>{https://down-br.img.susercontent.com/file/bd5f32b2db10b22a4c2070417342bd93@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/dbd96c78e9f9c1b3a34f17d8ab441e90.webp,"","",https://down-br.img.susercontent.com/file/4947def37373a8379cef11e70a06f4d8.webp,https://down-br.img.susercontent.com/file/791947e748a7376361cb7ccd186603eb.webp,""}</image>
    <size>{"","","","","",""}</size>
    <color>{"","","","",""}</color>
    <slug>{"","","",https://down-br.img.susercontent.com/file/a4901b40cff401af4e287059ba5ee3e0.webp,"",""}</slug>
    <description>Instale em qualquer lugar, no Cavalete, Caixa De água, Encanamento, Hidrometro Para Colar no Hidrometro tubulações ou antes da caixa de água  Material Do Corpo: PVC Atóxico Rígido Certificado Técnico  Norma: NBR5648   Cor: Azul   Peso unitário :  30 Gramas Êmbolo: Poliacetal Ante Desgaste Vedação: Borracha Sintética Parafuso e Mola:  Inox A2 Anticorrosivo Vida útil:  Acima de 20 anos Garantia: 1 ano contra defeito de fabricação Embalagem: Manual completo, folheto,  Instale em Cavalete, Encanamento, Caixa Dágua, By pass Único completo Luvas Soldável Silencioso. Não produz ruídos Mais reforçado do mercado melhor custo benefício kit completo  Soldável e/ou Roscável para hidrômetro tubulações ou antes da caixa de água Vantagem ArClosed  Bloqueio do ar  Irregularidades de abastecimento da água Estabiliza Pressão da rede Aumenta Vida útil das tubulações Produto Amigo da sua conta, Comprove, Evita vazamentos  Apoie uso consciente d Água adquirindo ArClosed  Sistema ante retorno, Evita retorno da água que já Foi contabilizado no hidrômetro, volte a rua ou aos vizinhos, Evita Gastos desnecessários , com uso da água, e irregularidades Aumenta vida útil da tubulação, evitando trincas e rupturas, Irá pagar Somente o que consome Terá uma ótima melhoria em seu sistema hidráulico, Evita passagem livre Ar Água não volta para Rua Pressão fica equilibrada Aumenta vida útil da tubulação Evitando quebras e Trincas por pressão e irregularidades no abastecimento  Finalidade: - Impede a passagem de ar pelo hidrômetro. - Isento de peças sujeitas ao desgaste e reposição. - Aumenta a vida útil do hidrômetro e tubulações.  Como saber se estou pagando Ar:  O Consumo de água recomendado pela organização mundial da saúde para uma vida confortável em uma residência (uso racional), é de 150 litros por pessoa por dia. Desta forma dependendo do número de pessoas que moram em sua casa o consumo ideal de água por mês seria: (Abaixo Relação)   Consumo considerado ideal por quantidade de pessoas em uma residência  02 Pessoas 9m 03 Pessoas 13,5 m 04 Pessoas 18,0 m 05 Pessoas 22,5 m 06 Pessoas 27,0 m   Se houver um consumo maior que este recomendado, você está desperdiçando água ou tem vazamento ou está entrando ar na tubulação de água.  Contém: Manual Completo Impresso   3/4"DN25 PVC Azul Luvas Para Colar Encanamento Cavalete Hidrometro Caixa Dágua </description>
    <quantity></quantity>
    <url_product>https://shopee.com.br/Bloqueador-de-Ar-Redutor-De-Conta-%C3%81gua-Cola-Top-At%C3%A9-65-na-Redu%C3%A7%C3%A3o-i.705455111.18444515795?sp_atk=f03e1619-6ee7-41a6-85fd-79114091003c&amp;xptdk=f03e1619-6ee7-41a6-85fd-79114091003c</url_product>
    <created_at>2025-02-23 14:10:28.782</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>aae48de5-a18b-4833-94fc-3888a281a298</id>
    <name>Bloqueador de Ar Original Redutor De Conta De Água Top Até 65% na Redução</name>
    <bar_code>6</bar_code>
    <price>30</price>
    <image>{https://down-br.img.susercontent.com/file/bd5f32b2db10b22a4c2070417342bd93@resize_w450_nl.webp,https://down-br.img.susercontent.com/file/dbd96c78e9f9c1b3a34f17d8ab441e90.webp,https://down-br.img.susercontent.com/file/4947def37373a8379cef11e70a06f4d8.webp,https://down-br.img.susercontent.com/file/791947e748a7376361cb7ccd186603eb.webp,"",""}</image>
    <size>{"","","","",""}</size>
    <color>{Azul,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/a4901b40cff401af4e287059ba5ee3e0.webp,"","","",""}</slug>
    <description>Instale em qualquer lugar, no Cavalete, Caixa De água, Encanamento, Hidrometro Para Colar no Hidrometro tubulações ou antes da caixa de água  Material Do Corpo: PVC Atóxico Rígido Certificado Técnico  Norma: NBR5648   Cor: Azul   Peso unitário :  30 Gramas Êmbolo: Poliacetal Ante Desgaste Vedação: Borracha Sintética Parafuso e Mola:  Inox A2 Anticorrosivo Vida útil:  Acima de 20 anos Garantia: 1 ano contra defeito de fabricação Embalagem: Manual completo, folheto,  Instale em Cavalete, Encanamento, Caixa Dágua, By pass Único completo Luvas Soldável Silencioso. Não produz ruídos Mais reforçado do mercado melhor custo benefício kit completo  Soldável e/ou Roscável para hidrômetro tubulações ou antes da caixa de água Vantagem ArClosed  Bloqueio do ar  Irregularidades de abastecimento da água Estabiliza Pressão da rede Aumenta Vida útil das tubulações Produto Amigo da sua conta, Comprove, Evita vazamentos  Apoie uso consciente d Água adquirindo ArClosed  Sistema ante retorno, Evita retorno da água que já Foi contabilizado no hidrômetro, volte a rua ou aos vizinhos, Evita Gastos desnecessários , com uso da água, e irregularidades Aumenta vida útil da tubulação, evitando trincas e rupturas, Irá pagar Somente o que consome Terá uma ótima melhoria em seu sistema hidráulico, Evita passagem livre Ar Água não volta para Rua Pressão fica equilibrada Aumenta vida útil da tubulação Evitando quebras e Trincas por pressão e irregularidades no abastecimento  Finalidade: - Impede a passagem de ar pelo hidrômetro. - Isento de peças sujeitas ao desgaste e reposição. - Aumenta a vida útil do hidrômetro e tubulações.  Como saber se estou pagando Ar:  O Consumo de água recomendado pela organização mundial da saúde para uma vida confortável em uma residência (uso racional), é de 150 litros por pessoa por dia. Desta forma dependendo do número de pessoas que moram em sua casa o consumo ideal de água por mês seria: (Abaixo Relação)   Consumo considerado ideal por quantidade de pessoas em uma residência  02 Pessoas 9m 03 Pessoas 13,5 m 04 Pessoas 18,0 m 05 Pessoas 22,5 m 06 Pessoas 27,0 m   Se houver um consumo maior que este recomendado, você está desperdiçando água ou tem vazamento ou está entrando ar na tubulação de água.  Contém: Manual Completo Impresso   3/4"DN25 PVC Azul Luvas Para Colar Encanamento Cavalete Hidrometro Caixa Dágua </description>
    <quantity></quantity>
    <url_product>https://shopee.com.br/Bloqueador-de-Ar-Redutor-De-Conta-%C3%81gua-Cola-Top-At%C3%A9-65-na-Redu%C3%A7%C3%A3o-i.705455111.18444515795?sp_atk=f03e1619-6ee7-41a6-85fd-79114091003c&amp;xptdk=f03e1619-6ee7-41a6-85fd-79114091003c</url_product>
    <created_at>2025-02-23 14:10:17.553</created_at>
    <frete>Gratis</frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>8e394cdd-1449-4d19-b8be-32c545003468</id>
    <name>Kit 5 Calcinhas sem costura Corte Laser não marca confortável</name>
    <bar_code>10</bar_code>
    <price>40</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4lbovd5b,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4laaax35,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4lbob0ed,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4la9qk0d,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4lbosn30,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-lnxiokhaopxje5.16000081699657220.mp4}</image>
    <size>{P,M,G,GG,""}</size>
    <color>{"Sortidos ","","","",""}</color>
    <slug>{"https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnxicv4lbovd5b ",calsinhas,"calsinhas confortavel","kit calcinhas ","calcinhas sem costura  "}</slug>
    <description>COMPRE AGORA!!! ENVIO EM 24HRS !!!    Nossas calcinhas sem costura são essenciais no seu guarda roupa, aquela que vira a sua queridinha!! Seu tecido em microfibra com forro 100% algodão, possui elastano para maior conforto, proporcionando uma ótima elasticidade na peça e um caimento lindo no seu corpo! Por possuir corte a laser, ela não te machuca ou marca na roupa! Tem todo conforto necessário para enfrentar a correria do dia a dia!!     TAMANHO  P: 36-38  M: 40-42  G: 44-46  GG: 48    Contém 5 peças !!!     NÃO PERCA ESSA OPORTUNIDADE !!! OBS: AS CORES SÃO ENVIADAS DE MANEIRA SORTIDA DE ACORDO COM A DISPONIBILIDADE EM NOSSO ESTOQUE NO MOMENTO DA EMBALAGEM!!! * PODENDO CONTER REPETIÇÕES *</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/493208904/23292627721?uls_trackid=4vua0vhi00mc&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=b8owzencep9u</url_product>
    <created_at>2024-06-03 14:34:05.320</created_at>
    <frete>Gratis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>dda95f77-f184-4673-82aa-d274de0b2c5f</id>
    <name>Furadeira de Impacto 800W Parafusadeira + Maleta 28 Itens Nakasaki controle de velocidade</name>
    <bar_code>6</bar_code>
    <price>400</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lupdpfx291g44d,https://down-br.img.susercontent.com/file/sg-11134201-7rcfb-lqxizc23mygo5d,https://down-br.img.susercontent.com/file/sg-11134201-7rcd6-lqxizjn4jf0d96,https://down-br.img.susercontent.com/file/sg-11134201-7rcef-lqxiz9vutg2jb2,https://down-br.img.susercontent.com/file/sg-11134201-7rcc6-lqxizpxjc3dga3,https://cvf.shopee.com.br/file/api/v4/11110105/mms/br-11110105-6kfkp-lupdrlhqqag59a.16000081714419356.mp4}</image>
    <size>{Padrão,"","","",""}</size>
    <color>{"Aleatório ","","","",""}</color>
    <slug>{"fuaradeira ","furadeira potente ","furadeira para concreto","furadeira top","furadeira profisional "}</slug>
    <description>Furadeira de Impacto Profissional Nakasaki 800W Com controle de velocidade  Alta precisão na broca, motor potente de 800W, design ergonômico, velocidade variável, e maquina rolamentada - Tudo o que você precisa em uma furadeira de impacto de qualidade profissional.  Especificações:  Marca: Nakasaki Modelo: NK1301 Tensão: Escolha entre 110V e 220V (não é bivolt, selecione sua tensão) Potência: 800W Mandril: 13mm Impactos por min.: 0-48.000 Rotações por min.: 0 - 3200RPM  Capacidades Perfuração: Concreto: 16mm Aço: 13mm Madeira: 30mm Cabo de Energia: 2m Recursos:  Punho com design ergonômico para maior conforto durante o uso. Velocidade variável e função de auto reverso para versatilidade em diferentes aplicações. Maquina rolamentada para maior durabilidade e desempenho consistente. Acompanha:  1 Punho para melhor controle. 1 Régua de Profundidade para ajustes precisos. 1 Chave de Mandril para troca rápida de brocas. 8 Cachimbos para diversas aplicações. 2 Pontas Fenda, 2 Pontas Philips, 1 Ponta Universal para parafusar com facilidade. 1 Extensor para Furadeira para alcance ampliado. 2 Brocas de Concreto, 2 Brocas de Madeira, 5 Brocas de Aço Carbono para diferentes materiais. Manual Maleta de qualidade para armazenamento e transporte conveniente.</description>
    <quantity>500</quantity>
    <url_product>https://shopee.com.br/product/607541653/22292827518?uls_trackid=500of6vf00vv&amp;utm_campaign=-&amp;utm_content=----&amp;utm_medium=affiliates&amp;utm_source=an_18355720125&amp;utm_term=bacqx72dtdkj</url_product>
    <created_at>2024-06-13 02:01:17.589</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
  <DATA_RECORD>
    <id>761b768b-1e14-4779-852a-4417bec7ea5a</id>
    <name>Placa Vídeo Amd Radeon Rx 550 4gb Hdmi Dvi Displayport Soyo</name>
    <bar_code>12</bar_code>
    <price>908</price>
    <image>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvtih4sz0t5q28,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvtih4szg9emb7,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvtih4szg9nq59,https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvtih4sz0svg29,"",https://cvf.shopee.com.br/file/api/v4/11110105/mms/sg-11110105-6khwl-lvj40x0exwgfb8.16000081716219004.mp4}</image>
    <size>{4GB,"","","",""}</size>
    <color>{Preto,"","","",""}</color>
    <slug>{https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvtih4sz0t5q28,"Placa Vídeo","Placa Vídeo 4gb","Placa Vídeo rx 550 4gb","Placa Vídeo rx"}</slug>
    <description>Marca SOYO Fabricante de Chipset Gráfico AMD Portas/ Interface HDMI Tipo de Memória de Vídeo GDDR5 Memória da Placa de Vídeo 4GB Tipo de Resfriamento Resfriado a Ar Fabricante SHENZHEN SUNSHINE TECH. DEVELOPMENT Co. Velocidade do Clock de Memória 6000MHz Nr de Homologação 0000000 Nome do Modelo RX 580 Modelo da Placa de Vídeo RX 580 Estoque 6 Enviado de Goiás Descrição Do Produto AMD Radeon RX550 4GB  • Resolução máxima: 4096x2160  • Processadores Stream: 512  • Frequência do núcleo (Mhz): 1183MHz  • Memória Clock Velocidade (Mhz): 6000MHz  • Vídeo Memória Capacidade: 4GB  • Tipo De Memória De Vídeo: GDDR5  • Relação video da memória: 128Bit  • Tipo de interface: PCI Express 3.0x16 (Eficaz Pci-e 3.0x8)  • DirectX: DirectX 12  • Saída Interface Tipo: DVI * 1  • Saída Interface Tipo: HDMI * 1  • Saída Interface Tipo: DisplayPort * 1  • Conector De Alimentação: NENHUMA  • Consumo energético: 50W  • Alimentação recomendada: 300W ou acima  Garantia do vendedor: 90 dias</description>
    <quantity>3</quantity>
    <url_product>https://shopee.com.br/Placa-V%C3%ADdeo-Amd-Radeon-Rx-550-4gb-Hdmi-Dvi-Displayport-Soyo-i.330544175.23797565823?sp_atk=e3a32e5a-3e92-4a68-a24b-996e98c2783f&amp;xptdk=e3a32e5a-3e92-4a68-a24b-996e98c2783f</url_product>
    <created_at>2024-06-18 03:35:46.475</created_at>
    <frete>Grátis </frete>
  </DATA_RECORD>
</Product>
`;

/**
* @author
* @function FeedXML
**/

export const FeedXML = (props) => {
  return(
    <div>
        <XMLViewer xml={xml} />
    </div>
   )
  }
