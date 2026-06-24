export type ActivityItem = {
  slug: string;
  year: number;
  title: string;
  summary: string;
  description: string[];
  heroImage?: string;
  gallery: string[];
  dateLabel: string;
  location: string;
};

export type LocalizedActivityItem = {
  slug: string;
  year: number;
  heroImage?: string;
  gallery: string[];
  es: {
    title: string;
    summary: string;
    description: string[];
    dateLabel: string;
    location: string;
  };
  pt: {
    title: string;
    summary: string;
    description: string[];
    dateLabel: string;
    location: string;
  };
  en: {
    title: string;
    summary: string;
    description: string[];
    dateLabel: string;
    location: string;
  };
};

export const activityYears = [2022, 2023, 2024, 2025, 2026];

export const rawActivities: LocalizedActivityItem[] = [
  {
    slug: "colecta-amsap",
    year: 2022,
    es: {
      title: "Colecta AMSAP",
      summary: "Participación de más de 20 voluntarios en una jornada solidaria para niñas y niños.",
      description: [
        "Más de 20 voluntarios participaron en la colecta de la Asociación Manos Solidarias de Alto Paraná (AMSAP).",
        "La jornada solidaria estuvo orientada a acompañar a niñas y niños de la comunidad.",
        "La actividad benefició a 160 niñas y niños, reforzando el compromiso de Joaju con acciones cercanas y concretas."
      ],
      dateLabel: "Febrero",
      location: "Alto Paraná, Paraguay"
    },
    pt: {
      title: "Coleta AMSAP",
      summary: "Participação de mais de 20 voluntários em uma jornada solidária para meninas e meninos.",
      description: [
        "Mais de 20 voluntários participaram da coleta da Associação Mãos Solidárias do Alto Paraná (AMSAP).",
        "A jornada solidária foi voltada para apoiar meninas e meninos da comunidade.",
        "A atividade beneficiou 160 crianças, reforçando o compromisso do Joaju com ações próximas e concretas."
      ],
      dateLabel: "Fevereiro",
      location: "Alto Paraná, Paraguai"
    },
    en: {
      title: "AMSAP Collection",
      summary: "Participation of more than 20 volunteers in a solidarity day for children.",
      description: [
        "More than 20 volunteers participated in the collection for the Association Solidary Hands of Alto Parana (AMSAP).",
        "The solidarity event was aimed at supporting children in the community.",
        "The activity benefited 160 children, reinforcing Joaju's commitment to close and concrete actions."
      ],
      dateLabel: "February",
      location: "Alto Parana, Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-prendas-polideportivo-municipal",
    year: 2022,
    es: {
      title: "Donación de Prendas",
      summary: "Donación de más de 100 prendas de vestir para el albergue del Polideportivo Municipal.",
      description: [
        "En mayo se realizó una donación de más de 100 prendas de vestir.",
        "La entrega fue destinada al albergue del Polideportivo Municipal, acompañando a personas que necesitaban abrigo y apoyo material.",
        "La acción reunió aportes solidarios y permitió responder a una necesidad concreta de la comunidad."
      ],
      dateLabel: "Mayo",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Doação de Roupas",
      summary: "Doação de mais de 100 peças de roupa para o abrigo do Poliesportivo Municipal.",
      description: [
        "Em maio, foi realizada uma doação de mais de 100 peças de roupa.",
        "A entrega foi destinada ao abrigo do Poliesportivo Municipal, acompanhando pessoas que precisavam de agasalho e apoio material.",
        "A ação reuniu contribuições solidárias e permitiu responder a uma necessidade concreta da comunidade."
      ],
      dateLabel: "Maio",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Clothing Donation",
      summary: "Donation of more than 100 clothing items for the Municipal Sports Center shelter.",
      description: [
        "In May, a donation of more than 100 clothing items was made.",
        "The delivery was destined for the Municipal Sports Center shelter, supporting people in need of warm clothes and material aid.",
        "The action gathered solidary contributions and allowed us to respond to a concrete community need."
      ],
      dateLabel: "May",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "educacion-financiera-hogar-las-tias",
    year: 2022,
    es: {
      title: "Educación Financiera",
      summary: "Charlas para jóvenes y apoyo económico al Hogar las tías.",
      description: [
        "En junio se realizaron charlas sobre educación financiera para jóvenes.",
        "La actividad también incluyó apoyo económico al Hogar las tías.",
        "Gracias al compromiso de la comunidad, se logró reunir apoyo para acompañar al hogar."
      ],
      dateLabel: "Junio",
      location: "Paraguay"
    },
    pt: {
      title: "Educação Financeira",
      summary: "Palestras para jovens e apoio financeiro ao Lar Las Tías.",
      description: [
        "Em junho, foram realizadas palestras sobre educação financeira para jovens.",
        "A atividade também incluiu apoio financeiro ao Lar Las Tías.",
        "Graças ao compromisso da comunidade, foi possível reunir apoio para acompanhar o lar."
      ],
      dateLabel: "Junho",
      location: "Paraguai"
    },
    en: {
      title: "Financial Education",
      summary: "Talks for youth and financial support to the Las Tias Shelter.",
      description: [
        "In June, talks on financial education for youth were held.",
        "The activity also included financial support to the Las Tias Shelter.",
        "Thanks to the community's commitment, we managed to gather support to assist the shelter."
      ],
      dateLabel: "June",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-juguetes-snacks-bilal-esgaib",
    year: 2022,
    es: {
      title: "Donación a Bilal Esgaib",
      summary: "Donación de juguetes y snacks a la Asociación Benéfica Bilal Esgaib.",
      description: [
        "En agosto se realizó una donación de juguetes y snacks a la Asociación Benéfica Bilal Esgaib.",
        "La acción buscó compartir un momento de alegría y acompañamiento con niñas y niños vinculados a la asociación.",
        "Cada aporte fue preparado con el espíritu cercano y solidario que caracteriza a Joaju."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Doação para Bilal Esgaib",
      summary: "Doação de brinquedos e lanches para a Associação Beneficente Bilal Esgaib.",
      description: [
        "Em agosto, foi realizada uma doação de brinquedos e lanches para a Associação Beneficente Bilal Esgaib.",
        "A ação buscou compartilhar um momento de alegria e proximidade com as crianças assistidas pela associação.",
        "Cada contribuição foi preparada com o espírito caloroso e solidário que caracteriza o Joaju."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Donation to Bilal Esgaib",
      summary: "Donation of toys and snacks to the Bilal Esgaib Charity Association.",
      description: [
        "In August, toys and snacks were donated to the Bilal Esgaib Charity Association.",
        "The action aimed to share a moment of joy and presence with children connected to the association.",
        "Each contribution was prepared with the close and solidary spirit that characterizes Joaju."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "aprendizaje-hogar-las-tias",
    year: 2022,
    es: {
      title: "Programa de Aprendizaje",
      summary: "Programa en el Hogar las tías, beneficiando a 50 niños y adolescentes.",
      description: [
        "En octubre se desarrolló el Programa de Aprendizaje en el Hogar las tías, beneficiando a 50 niños y adolescentes.",
        "La actividad acompañó procesos educativos y de crecimiento para fortalecer oportunidades de aprendizaje."
      ],
      dateLabel: "Octubre",
      location: "Paraguay"
    },
    pt: {
      title: "Programa de Aprendizagem",
      summary: "Programa no Lar Las Tías, beneficiando 50 crianças e adolescentes.",
      description: [
        "Em outubro, foi desenvolvido o Programa de Aprendizagem no Lar Las Tías, beneficiando 50 crianças e adolescentes.",
        "A atividade acompanhou processos educativos e de desenvolvimento para fortalecer oportunidades de aprendizagem."
      ],
      dateLabel: "Outubro",
      location: "Paraguai"
    },
    en: {
      title: "Learning Program",
      summary: "Program at Las Tias Shelter, benefiting 50 children and adolescents.",
      description: [
        "In October, the Learning Program was developed at the Las Tias Shelter, benefiting 50 children and adolescents.",
        "The activity accompanied educational and growth processes to strengthen learning opportunities."
      ],
      dateLabel: "October",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-equipos-san-felix",
    year: 2022,
    es: {
      title: "Donación de Equipos Informáticos",
      summary: "Donación de 7 equipos informáticos a la Obra Social San Félix de Cantalicio.",
      description: [
        "El 6 de diciembre se realizó la donación de 7 equipos informáticos a la Obra Social San Félix de Cantalicio.",
        "La actividad buscó fortalecer oportunidades de aprendizaje y acceso a herramientas digitales.",
        "Esta acción acompañó procesos educativos y de crecimiento para la comunidad beneficiada."
      ],
      dateLabel: "Diciembre",
      location: "Paraguay"
    },
    pt: {
      title: "Doação de Equipamentos de Informática",
      summary: "Doação de 7 computadores para a Obra Social San Félix de Cantalicio.",
      description: [
        "No dia 6 de dezembro, foi realizada a doação de 7 computadores para a Obra Social San Félix de Cantalicio.",
        "A atividade buscou fortalecer oportunidades de aprendizagem e o acesso a ferramentas digitais.",
        "Esta ação apoiou processos educativos e de desenvolvimento para a comunidade beneficiada."
      ],
      dateLabel: "Dezembro",
      location: "Paraguai"
    },
    en: {
      title: "Computer Equipment Donation",
      summary: "Donation of 7 computer sets to the San Felix de Cantalicio Social Work.",
      description: [
        "On December 6, 7 computer sets were donated to the San Felix de Cantalicio Social Work.",
        "The activity aimed to strengthen learning opportunities and access to digital tools.",
        "This action supported educational and growth processes for the benefited community."
      ],
      dateLabel: "December",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "colecta-juntos-para-abrigarte",
    year: 2023,
    es: {
      title: "Juntos para Abrigarte",
      summary: "Colecta de abrigos entregados en la Junta Municipal de Ciudad del Este.",
      description: [
        "En mayo se realizó una colecta de abrigos en el marco de la campaña Juntos para abrigarte.",
        "Los abrigos reunidos fueron entregados en la Junta Municipal de Ciudad del Este.",
        "La actividad acompañó a la comunidad con una acción concreta de cuidado y solidaridad."
      ],
      dateLabel: "Mayo",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Juntos para Abrigarte",
      summary: "Coleta de agasalhos entregues na Câmara Municipal de Ciudad del Este.",
      description: [
        "Em maio, foi realizada uma coleta de agasalhos no âmbito da campanha Juntos para abrigarte.",
        "As roupas de frio reunidas foram entregues na Câmara Municipal de Ciudad del Este.",
        "A atividade apoiou a comunidade com uma ação concreta de cuidado e solidariedade."
      ],
      dateLabel: "Maio",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Together to Warm You",
      summary: "Warm clothes drive delivered to the Municipal Council of Ciudad del Este.",
      description: [
        "In May, a warm clothing drive was held under the campaign Together to Warm You.",
        "The collected clothing items were delivered to the Municipal Council of Ciudad del Este.",
        "The activity supported the community with a concrete action of care and solidarity."
      ],
      dateLabel: "May",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "dia-del-nino-asentamiento-13-de-junio",
    year: 2023,
    es: {
      title: "Día del Niño",
      summary: "Conmemoración del Día del Niño en el asentamiento 13 de junio de Hernandarias.",
      description: [
        "En agosto se conmemoró el Día del Niño en el asentamiento 13 de junio.",
        "La actividad se realizó en la ciudad de Hernandarias.",
        "Fue una jornada de cercanía, celebración y acompañamiento para niñas y niños de la comunidad."
      ],
      dateLabel: "Agosto",
      location: "Hernandarias, Paraguay"
    },
    pt: {
      title: "Dia das Crianças",
      summary: "Comemoração do Dia das Crianças no assentamento 13 de Junho de Hernandarias.",
      description: [
        "Em agosto, foi comemorado o Dia das Crianças no assentamento 13 de Junho.",
        "A atividade foi realizada na cidade de Hernandarias.",
        "Foi um dia de proximidade, celebração e apoio para as meninas e meninos da comunidade."
      ],
      dateLabel: "Agosto",
      location: "Hernandarias, Paraguai"
    },
    en: {
      title: "Children's Day",
      summary: "Commemoration of Children's Day in the June 13 settlement in Hernandarias.",
      description: [
        "In August, Children's Day was celebrated in the June 13 settlement.",
        "The activity took place in the city of Hernandarias.",
        "It was a day of closeness, celebration, and support for the children of the community."
      ],
      dateLabel: "August",
      location: "Hernandarias, Paraguay"
    },
    gallery: []
  },
  {
    slug: "charla-donacion-de-sangre",
    year: 2023,
    es: {
      title: "Charla sobre Donación de Sangre",
      summary: "Charla informativa sobre la importancia de la donación de sangre.",
      description: [
        "En agosto se realizó una charla informativa sobre la importancia de la donación de sangre.",
        "El espacio buscó sensibilizar y compartir información útil sobre el impacto de donar.",
        "La actividad reforzó el compromiso de Joaju con iniciativas que pueden salvar vidas."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Palestra sobre Doação de Sangue",
      summary: "Palestra informativa sobre a importância da doação de sangue.",
      description: [
        "Em agosto, foi realizada uma palestra informativa sobre a importância da doação de sangue.",
        "O espaço buscou sensibilizar e compartilhar informações úteis sobre o impacto de doar.",
        "A atividade reforçou o compromisso do Joaju com iniciativas que podem salvar vidas."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Blood Donation Talk",
      summary: "Informative talk on the importance of blood donation.",
      description: [
        "In August, an informative talk about the importance of blood donation was held.",
        "The space aimed to raise awareness and share useful information on the impact of donating.",
        "The activity reinforced Joaju's commitment to initiatives that can save lives."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "acondicionador-casa-de-la-misericordia",
    year: 2023,
    es: {
      title: "Entrega a Casa de la Misericordia",
      summary: "Compra y entrega de un acondicionador de aire a la Casa de la Misericordia.",
      description: [
        "En noviembre se realizó la compra y entrega de un acondicionador de aire a la Casa de la Misericordia.",
        "La institución está ubicada en el km 8 de Ciudad del Este.",
        "La donación buscó mejorar las condiciones del espacio y acompañar su labor comunitaria."
      ],
      dateLabel: "Noviembre",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Entrega para Casa da Misericórdia",
      summary: "Compra e entrega de um ar-condicionado para a Casa da Misericórdia.",
      description: [
        "Em novembro, foi realizada a compra e entrega de um ar-condicionado para a Casa da Misericórdia.",
        "A instituição está localizada no km 8 de Ciudad del Este.",
        "A doação buscou melhorar as condições do espaço e apoiar o seu trabalho comunitário."
      ],
      dateLabel: "Novembro",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Delivery to House of Mercy",
      summary: "Purchase and delivery of an air conditioner to the House of Mercy.",
      description: [
        "In November, an air conditioner was purchased and delivered to the House of Mercy.",
        "The institution is located at km 8 in Ciudad del Este.",
        "The donation aimed to improve the conditions of the space and support its community work."
      ],
      dateLabel: "November",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "talleres-herramientas-digitales",
    year: 2023,
    es: {
      title: "Talleres de Herramientas Digitales",
      summary: "Charlas y cursos sobre máquinas, Gmail, documentos, hojas de cálculo y elaboración de curriculum.",
      description: [
        "En diciembre se realizó la charla No temas a las máquinas.",
        "También se desarrollaron los cursos taller Crea e intercambia correos con Gmail y Gestiona documentos y hojas de cálculo con Google.",
        "La agenda incluyó un taller de elaboración de curriculum para fortalecer herramientas prácticas de desarrollo personal y laboral."
      ],
      dateLabel: "Diciembre",
      location: "Paraguay"
    },
    pt: {
      title: "Oficinas de Ferramentas Digitais",
      summary: "Palestras e cursos sobre computadores, Gmail, documentos, planilhas e elaboração de currículo.",
      description: [
        "Em dezembro, foi realizada a palestra Não tema as máquinas.",
        "Também foram desenvolvidos os cursos práticos Crie e troque e-mails com o Gmail e Gerencie documentos e planilhas com o Google.",
        "A agenda incluiu uma oficina de elaboração de currículo para fortalecer ferramentas práticas de desenvolvimento pessoal e profissional."
      ],
      dateLabel: "Dezembro",
      location: "Paraguai"
    },
    en: {
      title: "Digital Tools Workshops",
      summary: "Talks and courses on computers, Gmail, documents, spreadsheets, and resume building.",
      description: [
        "In December, the talk Don't Fear the Machines was held.",
        "Hands-on workshop courses Create and exchange emails with Gmail and Manage documents and spreadsheets with Google were also developed.",
        "The agenda included a resume writing workshop to strengthen practical tools for personal and professional development."
      ],
      dateLabel: "December",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "utiles-colegio-santa-teresa",
    year: 2024,
    es: {
      title: "Entrega de Útiles Escolares",
      summary: "Entrega de útiles escolares, libros y materiales de oficina en el Colegio Santa Teresa de Jesús.",
      description: [
        "En febrero se realizó una entrega en el Colegio Santa Teresa de Jesús, ubicado en el Barrio San Rafael.",
        "Aproximadamente 200 niños, adolescentes y profesores recibieron útiles escolares, libros y materiales de oficina.",
        "La actividad buscó acompañar el inicio del año escolar y fortalecer el acceso a recursos educativos."
      ],
      dateLabel: "Febrero",
      location: "Barrio San Rafael, Paraguay"
    },
    pt: {
      title: "Entrega de Materiais Escolares",
      summary: "Entrega de materiais escolares, livros e suprimentos de escritório no Colégio Santa Teresa de Jesús.",
      description: [
        "Em fevereiro, foi realizada uma entrega no Colégio Santa Teresa de Jesús, localizado no Bairro San Rafael.",
        "Aproximadamente 200 crianças, adolescentes e professores receberam materiais escolares, livros e suprimentos de escritório.",
        "A atividade buscou apoiar o início do ano letivo e fortalecer o acesso a recursos educacionais."
      ],
      dateLabel: "Fevereiro",
      location: "Bairro San Rafael, Paraguai"
    },
    en: {
      title: "School Supplies Delivery",
      summary: "Delivery of school supplies, books, and office materials at Santa Teresa de Jesus School.",
      description: [
        "In February, a delivery was made to the Santa Teresa de Jesus School, located in the San Rafael neighborhood.",
        "Approximately 200 children, adolescents, and teachers received school supplies, books, and office materials.",
        "The activity aimed to support the beginning of the school year and strengthen access to educational resources."
      ],
      dateLabel: "February",
      location: "San Rafael Neighborhood, Paraguay"
    },
    gallery: []
  },
  {
    slug: "mochilas-san-antonio-hogar-las-tias",
    year: 2024,
    es: {
      title: "Entrega de Mochilas",
      summary: "Entrega de mochilas a la Escuela Básica San Antonio y presencia en la inauguración de la Fundación Hogar Las Tías.",
      description: [
        "En marzo se realizó la entrega de mochilas a la Escuela Básica San Antonio del Barrio San Agustín.",
        "Joaju también estuvo presente en la inauguración de la Fundación Hogar Las Tías.",
        "La actividad reunió apoyo educativo y acompañamiento a espacios comunitarios vinculados a la niñez."
      ],
      dateLabel: "Marzo",
      location: "Barrio San Agustín, Paraguay"
    },
    pt: {
      title: "Entrega de Mochilas",
      summary: "Entrega de mochilas na Escola Básica San Antonio e presença na inauguração da Fundação Lar Las Tías.",
      description: [
        "Em março, foi realizada a entrega de mochilas na Escola Básica San Antonio do Bairro San Agustín.",
        "O Joaju também esteve presente na inauguração da Fundação Lar Las Tías.",
        "A atividade uniu apoio educacional e acompanhamento a espaços comunitários vinculados à infância."
      ],
      dateLabel: "Março",
      location: "Bairro San Agustín, Paraguai"
    },
    en: {
      title: "Backpacks Delivery",
      summary: "Delivery of backpacks to the San Antonio Elementary School and presence at the Las Tias Foundation inauguration.",
      description: [
        "In March, backpacks were delivered to the San Antonio Elementary School in the San Agustin neighborhood.",
        "Joaju was also present at the inauguration of the Las Tias Shelter Foundation.",
        "The activity combined educational support and accompaniment to community spaces linked to childhood."
      ],
      dateLabel: "March",
      location: "San Agustin Neighborhood, Paraguay"
    },
    gallery: []
  },
  {
    slug: "minga-ambiental-santa-teresa",
    year: 2024,
    es: {
      title: "Minga Ambiental",
      summary: "Jornada ambiental en la Escuela y Colegio Santa Teresa de Jesús con limpieza, donaciones y sensibilización.",
      description: [
        "En abril se realizó una minga ambiental en la Escuela y Colegio Santa Teresa de Jesús.",
        "Durante la jornada del 20-04-24 se ejecutaron actividades de limpieza y embellecimiento del entorno escolar, junto con la donación de insumos de limpieza para la institución.",
        "También se realizó sensibilización sobre el cuidado del medio ambiente, con provisión de trípticos con informaciones claves.",
        "La actividad incluyó la donación de 10 bancos de palets y 4 basureros de metal."
      ],
      dateLabel: "Abril",
      location: "Paraguay"
    },
    pt: {
      title: "Mutirão Ambiental",
      summary: "Dia de mutirão ambiental na Escola e Colégio Santa Teresa de Jesús com limpeza, doações e conscientização.",
      description: [
        "Em abril, foi realizado um mutirão ambiental na Escola e Colégio Santa Teresa de Jesús.",
        "Durante o dia 20-04-24, foram realizadas atividades de limpeza e revitalização do ambiente escolar, juntamente com a doação de produtos de limpeza para a instituição.",
        "Também foi realizada a conscientização sobre o cuidado do meio ambiente, com a distribuição de fôlderes com informações essenciais.",
        "A atividade incluiu a doação de 10 bancos de pallets e 4 lixeiras de metal."
      ],
      dateLabel: "Abril",
      location: "Paraguai"
    },
    en: {
      title: "Environmental Cleanup Day",
      summary: "Cleanup day at Santa Teresa de Jesus School with cleanups, donations, and awareness raising.",
      description: [
        "In April, an environmental cleanup day was held at the Santa Teresa de Jesus School.",
        "During the event on 20-04-24, cleaning and beautification of the school environment were executed, alongside the donation of cleaning supplies for the institution.",
        "Environmental care awareness was also raised, with brochures containing key information provided.",
        "The activity included the donation of 10 pallet benches and 4 metal bins."
      ],
      dateLabel: "April",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-de-sangre-ediciones-2024",
    year: 2024,
    es: {
      title: "Donación de Sangre",
      summary: "2da, 3era y 4ta edición de la jornada de donación de sangre.",
      description: [
        "Durante enero, mayo y noviembre se realizaron nuevas ediciones de la jornada de donación de sangre.",
        "Estas actividades correspondieron a la 2da, 3era y 4ta edición.",
        "La iniciativa sostuvo la promoción de la donación voluntaria como una forma concreta de ayudar a salvar vidas."
      ],
      dateLabel: "Enero, mayo y noviembre",
      location: "Paraguay"
    },
    pt: {
      title: "Doação de Sangue",
      summary: "2ª, 3ª e 4ª edições da jornada de doação de sangue.",
      description: [
        "Durante janeiro, maio e novembro foram realizadas novas edições da campanha de doação de sangue.",
        "Estas atividades corresponderam à 2ª, 3ª e 4ª edições.",
        "A iniciativa manteve a promoção da doação voluntária como uma forma concreta de ajudar a salvar vidas."
      ],
      dateLabel: "Janeiro, maio e novembro",
      location: "Paraguai"
    },
    en: {
      title: "Blood Donation Drive",
      summary: "2nd, 3rd, and 4th editions of the blood donation drive.",
      description: [
        "During January, May, and November, new editions of the blood donation drive were held.",
        "These activities corresponded to the 2nd, 3rd, and 4th editions.",
        "The initiative sustained the promotion of voluntary donation as a concrete way to help save lives."
      ],
      dateLabel: "January, May, and November",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "todos-por-rio-grande-do-sul",
    year: 2024,
    es: {
      title: "Todos por Rio Grande do Sul",
      summary: "Donación de alimentos, ropa y artículos de higiene para apoyar a comunidades afectadas en Brasil.",
      description: [
        "Del 13 al 18 de mayo se desarrolló el proyecto Todos por Rio Grande do Sul, Brasil.",
        "La actividad consistió en la donación de alimentos, ropa y artículos de higiene.",
        "El objetivo fue apoyar a comunidades afectadas y canalizar la solidaridad hacia una necesidad urgente."
      ],
      dateLabel: "Mayo",
      location: "Brasil"
    },
    pt: {
      title: "Todos pelo Rio Grande do Sul",
      summary: "Doação de alimentos, roupas e itens de higiene para apoiar comunidades afetadas no Brasil.",
      description: [
        "De 13 a 18 de maio, desenvolveu-se o projeto Todos pelo Rio Grande do Sul, Brasil.",
        "A atividade consistiu na doação de alimentos, roupas e artigos de higiene.",
        "O objetivo foi apoiar as comunidades afetadas e canalizar a solidariedade para uma necessidade urgente."
      ],
      dateLabel: "Maio",
      location: "Brasil"
    },
    en: {
      title: "All for Rio Grande do Sul",
      summary: "Donation of food, clothing, and hygiene products to support affected communities in Brazil.",
      description: [
        "From May 13 to 18, the project All for Rio Grande do Sul, Brazil was carried out.",
        "The activity consisted of donating food, clothing, and hygiene items.",
        "The goal was to support affected communities and direct solidarity toward an urgent need."
      ],
      dateLabel: "May",
      location: "Brazil"
    },
    gallery: []
  },
  {
    slug: "festividad-de-san-juan",
    year: 2024,
    es: {
      title: "Festividad de San Juan",
      summary: "Celebración de la Festividad de San Juan.",
      description: [
        "En julio se realizó una actividad vinculada a la Festividad de San Juan.",
        "La jornada abrió un espacio de encuentro comunitario, tradición y participación.",
        "Fue una oportunidad para fortalecer vínculos a través de una celebración compartida."
      ],
      dateLabel: "Julio",
      location: "Paraguay"
    },
    pt: {
      title: "Festa de São João",
      summary: "Celebração da tradicional Festa de São João.",
      description: [
        "Em julho, foi realizada uma atividade ligada à Festa de São João.",
        "O evento abriu um espaço de encontro comunitário, tradição e participação.",
        "Foi uma oportunidade para fortalecer os laços através de uma comemoração compartilhada."
      ],
      dateLabel: "Julho",
      location: "Paraguai"
    },
    en: {
      title: "Saint John's Festival",
      summary: "Celebration of the Saint John's Festival.",
      description: [
        "In July, an activity linked to the Saint John's Festival was held.",
        "The day opened a space for community meeting, tradition, and participation.",
        "It was an opportunity to strengthen bonds through a shared celebration."
      ],
      dateLabel: "July",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "dia-del-donante-voluntario",
    year: 2024,
    es: {
      title: "Día del Donante Voluntario",
      summary: "Donación de souvenirs y difusión de un video de concienciación sobre la donación voluntaria de sangre.",
      description: [
        "En julio se realizó la donación de souvenirs para el Día del Donante Voluntario de Sangre.",
        "También se difundió un video de concienciación acerca de la importancia de la donación voluntaria de sangre.",
        "La acción buscó reconocer a los donantes y promover una cultura de compromiso solidario."
      ],
      dateLabel: "Julio",
      location: "Paraguay"
    },
    pt: {
      title: "Dia do Doador Voluntário",
      summary: "Doação de brindes e divulgação de vídeo de conscientização sobre a doação voluntária de sangue.",
      description: [
        "Em julho, foi realizada a entrega de lembranças para o Dia do Doador Voluntário de Sangue.",
        "Também foi divulgado um vídeo de conscientização sobre a importância da doação de sangue voluntária.",
        "A ação buscou homenagear os doadores e promover uma cultura de compromisso solidário."
      ],
      dateLabel: "Julho",
      location: "Paraguai"
    },
    en: {
      title: "Voluntary Donor Day",
      summary: "Donation of souvenirs and dissemination of an awareness video on voluntary blood donation.",
      description: [
        "In July, souvenirs were donated for the Voluntary Blood Donor Day.",
        "An awareness video about the importance of voluntary blood donation was also shared.",
        "The action aimed to recognize donors and promote a culture of solidary commitment."
      ],
      dateLabel: "July",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "charla-sobre-voluntariado",
    year: 2024,
    es: {
      title: "Charla sobre Voluntariado",
      summary: "Reflexión sobre el impacto positivo de ser voluntario en la comunidad.",
      description: [
        "En julio se realizó una charla sobre voluntariado.",
        "El espacio propuso una reflexión sobre el impacto positivo de ser voluntario en la comunidad.",
        "La actividad reforzó el valor del compromiso, la participación y la acción solidaria."
      ],
      dateLabel: "Julio",
      location: "Paraguay"
    },
    pt: {
      title: "Palestra sobre Voluntariado",
      summary: "Reflexão sobre o impacto positivo de ser voluntário na comunidade.",
      description: [
        "Em julho, foi realizada uma palestra sobre voluntariado.",
        "O espaço propôs uma reflexão sobre o impacto positivo de ser voluntário na comunidade.",
        "A atividade reforçou o valor do compromisso, da participação e da ação solidária."
      ],
      dateLabel: "Julho",
      location: "Paraguai"
    },
    en: {
      title: "Talk on Volunteering",
      summary: "Reflection on the positive impact of being a volunteer in the community.",
      description: [
        "In July, a talk on volunteering was held.",
        "The space proposed a reflection on the positive impact of being a volunteer in the community.",
        "The activity reinforced the value of commitment, participation, and solidary action."
      ],
      dateLabel: "July",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "colecta-anual-apostar-por-la-vida",
    year: 2024,
    es: {
      title: "Colecta Anual Apostar por la Vida",
      summary: "Donación en la Colecta Anual de la Fundación Apostar por la Vida.",
      description: [
        "El 9 y 10 de agosto se realizó la Colecta Anual de la Fundación Apostar por la Vida.",
        "Joaju acompañó la iniciativa con una donación.",
        "La acción permitió apoyar el trabajo solidario de la fundación y su impacto en la comunidad."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Coleta Anual Apostar por la Vida",
      summary: "Doação na Coleta Anual da Fundação Apostar por la Vida.",
      description: [
        "Nos dias 9 e 10 de agosto, foi realizada a Coleta Anual da Fundação Apostar por la Vida.",
        "O Joaju acompanhou a iniciativa com uma doação.",
        "A ação permitiu apoiar o trabalho solidário da fundação e o seu impacto na comunidade."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Apostar por la Vida Annual Drive",
      summary: "Donation to the Apostar por la Vida Foundation Annual Drive.",
      description: [
        "On August 9 and 10, the Annual Drive of the Apostar por la Vida Foundation took place.",
        "Joaju supported the initiative with a donation.",
        "The action helped back the foundation's charity work and its impact on the community."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "proyecto-nino-feliz",
    year: 2024,
    es: {
      title: "Proyecto Niño Feliz",
      summary: "Donación de insumos médicos para pediatría en el marco del Proyecto Niño Feliz.",
      description: [
        "El 28 de agosto se realizó el Proyecto Niño Feliz.",
        "La actividad consistió en la donación de insumos médicos para pediatría.",
        "El aporte buscó acompañar la atención de niñas y niños desde una necesidad concreta del área de salud."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Projeto Criança Feliz",
      summary: "Doação de insumos médicos para pediatria no âmbito do Projeto Criança Feliz.",
      description: [
        "No dia 28 de agosto, foi realizado o Projeto Criança Feliz.",
        "A atividade consistiu na doação de insumos médicos para a área de pediatria.",
        "A contribuição buscou apoiar o atendimento de crianças a partir de uma necessidade concreta do setor de saúde."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Happy Child Project",
      summary: "Donation of medical supplies for pediatrics within the Happy Child Project framework.",
      description: [
        "On August 28, the Happy Child Project took place.",
        "The activity consisted of donating medical supplies for pediatrics.",
        "The contribution aimed to support the care of children, addressing a concrete need in the health sector."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-mobiliario-santa-teresa-hospital-regional",
    year: 2024,
    es: {
      title: "Donación de Mobiliario",
      summary: "Donación de mobiliario al Colegio Santa Teresa de Jesús y al Hospital Regional de Ciudad del Este.",
      description: [
        "El 26 de agosto se realizó una donación al Colegio Santa Teresa de Jesús.",
        "La entrega incluyó 4 escritorios, 1 silla de oficina y 1 pizarra.",
        "También se realizó una donación al Hospital Regional de Ciudad del Este, consistente en 4 escritorios."
      ],
      dateLabel: "Agosto",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Doação de Mobiliário",
      summary: "Doação de móveis para o Colégio Santa Teresa de Jesús e para o Hospital Regional de Ciudad del Este.",
      description: [
        "No dia 26 de agosto, foi realizada uma doação ao Colégio Santa Teresa de Jesús.",
        "A entrega incluiu 4 escrivaninhas, 1 cadeira de escritório e 1 lousa.",
        "Também foi realizada uma doação ao Hospital Regional de Ciudad del Este, composta por 4 escrivaninhas."
      ],
      dateLabel: "Agosto",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Furniture Donation",
      summary: "Donation of furniture to the Santa Teresa de Jesus School and the Regional Hospital of Ciudad del Este.",
      description: [
        "On August 26, a donation was made to the Santa Teresa de Jesus School.",
        "The delivery included 4 desks, 1 office chair, and 1 whiteboard.",
        "A donation was also made to the Regional Hospital of Ciudad del Este, consisting of 4 desks."
      ],
      dateLabel: "August",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "insumos-hospital-ciudad-del-este",
    year: 2024,
    es: {
      title: "Donación al Hospital de Ciudad del Este",
      summary: "Donación de productos de limpieza y porta sueros al Hospital de Ciudad del Este.",
      description: [
        "En noviembre se realizó una donación de insumos al Hospital de Ciudad del Este.",
        "La entrega incluyó productos de limpieza y porta sueros.",
        "La actividad acompañó necesidades operativas de la institución de salud."
      ],
      dateLabel: "Noviembre",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Doação ao Hospital de Ciudad del Este",
      summary: "Doação de produtos de limpeza e suportes de soro ao Hospital de Ciudad del Este.",
      description: [
        "Em novembro, foi realizada uma doação de insumos ao Hospital de Ciudad del Este.",
        "A entrega incluiu produtos de limpeza e suportes de soro.",
        "A atividade atendeu a necessidades operativas da instituição de saúde."
      ],
      dateLabel: "Novembro",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Donation to the Hospital of Ciudad del Este",
      summary: "Donation of cleaning products and IV stands to the Hospital of Ciudad del Este.",
      description: [
        "In November, a donation of supplies was made to the Hospital of Ciudad del Este.",
        "The delivery included cleaning products and IV stands.",
        "The activity supported the operational needs of the health institution."
      ],
      dateLabel: "November",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "donacion-hemocentro-cde",
    year: 2024,
    es: {
      title: "Donación al Hemocentro CDE",
      summary: "Donación de hojas impresas y un banner para el Hemocentro CDE.",
      description: [
        "En diciembre se realizó una donación para el Hemocentro CDE.",
        "La entrega incluyó 1 resma de hojas impresas para interrogatorio de donantes.",
        "También se donó 1 banner para acompañar las actividades del Hemocentro CDE."
      ],
      dateLabel: "Diciembre",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Doação ao Hemocentro CDE",
      summary: "Doação de folhas impressas e um banner para o Hemocentro de CDE.",
      description: [
        "Em dezembro, foi realizada uma doação para o Hemocentro CDE.",
        "A entrega incluiu 1 resma de folhas impressas para questionário de doadores.",
        "Também foi doado 1 banner para apoiar as atividades do Hemocentro CDE."
      ],
      dateLabel: "Dezembro",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Donation to the CDE Blood Center",
      summary: "Donation of printed forms and a banner for the CDE Blood Center.",
      description: [
        "In December, a donation was made to the CDE Blood Center.",
        "The delivery included 1 ream of printed forms for donor interviews.",
        "A banner was also donated to support the activities of the CDE Blood Center."
      ],
      dateLabel: "December",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "utiles-escuela-santa-barbara",
    year: 2025,
    es: {
      title: "Entrega a Escuela Santa Bárbara",
      summary: "Entrega de útiles escolares y 10 ventiladores de pared a la Escuela Básica N.º 3499 Santa Bárbara.",
      description: [
        "En marzo se acompañó a la Escuela Básica N.º 3499 Santa Bárbara, ubicada en Colonia Félix de Azara, Hernandarias.",
        "La acción benefició directamente a 269 estudiantes de nivel inicial, primer y segundo ciclo.",
        "Se entregaron más de 300 artículos escolares, entre cuadernos, lápices, carpetas, mochilas y otros materiales.",
        "También se realizó la entrega de 10 ventiladores de pared para la institución."
      ],
      dateLabel: "Marzo",
      location: "Colonia Félix de Azara, Hernandarias"
    },
    pt: {
      title: "Entrega na Escola Santa Bárbara",
      summary: "Entrega de materiais escolares e 10 ventiladores de parede para a Escola Básica N.º 3499 Santa Bárbara.",
      description: [
        "Em março, apoiou-se a Escola Básica N.º 3499 Santa Bárbara, localizada na Colonia Félix de Azara, Hernandarias.",
        "A ação beneficiou diretamente 269 estudantes da educação infantil, primeiro e segundo ciclos.",
        "Foram entregues mais de 300 itens escolares, entre cadernos, lápis, pastas, mochilas e outros materiais.",
        "Também foi realizada a entrega de 10 ventiladores de parede para a instituição."
      ],
      dateLabel: "Março",
      location: "Colônia Félix de Azara, Hernandarias"
    },
    en: {
      title: "Delivery to Santa Barbara School",
      summary: "Delivery of school supplies and 10 wall fans to the Santa Barbara Elementary School No. 3499.",
      description: [
        "In March, support was provided to the Santa Barbara Elementary School No. 3499, located in Colonia Felix de Azara, Hernandarias.",
        "The action directly benefited 269 students of preschool, first, and second cycles.",
        "More than 300 school items were delivered, including notebooks, pencils, folders, backpacks, and other materials.",
        "The delivery of 10 wall fans for the institution was also completed."
      ],
      dateLabel: "March",
      location: "Colonia Felix de Azara, Hernandarias"
    },
    gallery: []
  },
  {
    slug: "formularios-hemocentro-cde",
    year: 2025,
    es: {
      title: "Apoyo Operativo al Hemocentro CDE",
      summary: "Entrega de formularios requeridos para apoyo operativo al Hemocentro de Ciudad del Este.",
      description: [
        "En marzo se realizó una entrega destinada al Hemocentro de Ciudad del Este.",
        "La acción consistió en la entrega de formularios requeridos para apoyo operativo.",
        "El aporte buscó acompañar tareas internas necesarias para el funcionamiento del servicio."
      ],
      dateLabel: "Marzo",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Apoio Operacional ao Hemocentro CDE",
      summary: "Entrega de formulários necessários para o apoio operacional ao Hemocentro de Ciudad del Este.",
      description: [
        "Em março, foi realizada uma entrega destinada ao Hemocentro de Ciudad del Este.",
        "A ação consistiu no fornecimento de formulários necessários para o apoio operacional.",
        "A contribuição buscou apoiar tarefas internas essenciais para o funcionamento do serviço."
      ],
      dateLabel: "Março",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Operational Support to CDE Blood Center",
      summary: "Delivery of required forms for operational support to the Ciudad del Este Blood Center.",
      description: [
        "In March, a delivery destined for the Ciudad del Este Blood Center was made.",
        "The action consisted of delivering forms required for operational support.",
        "The contribution aimed to support internal tasks necessary for the running of the service."
      ],
      dateLabel: "March",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "acondicionador-hospital-regional-cde",
    year: 2025,
    es: {
      title: "Donación al Hospital Regional CDE",
      summary: "Donación de un acondicionador de aire al Hospital Regional de Ciudad del Este.",
      description: [
        "En abril se realizó una donación al Hospital Regional de Ciudad del Este.",
        "La acción fue realizada por Datapar.",
        "La donación consistió en un acondicionador de aire para acompañar necesidades de la institución."
      ],
      dateLabel: "Abril",
      location: "Ciudad del Este, Paraguay"
    },
    pt: {
      title: "Doação ao Hospital Regional CDE",
      summary: "Doação de um aparelho de ar-condicionado ao Hospital Regional de Ciudad del Este.",
      description: [
        "Em abril, foi realizada uma doação ao Hospital Regional de Ciudad del Este.",
        "A ação foi realizada pela Datapar.",
        "A doação consistiu em um aparelho de ar-condicionado para atender a necessidades da instituição."
      ],
      dateLabel: "Abril",
      location: "Ciudad del Este, Paraguai"
    },
    en: {
      title: "Donation to the CDE Regional Hospital",
      summary: "Donation of an air conditioner to the Regional Hospital of Ciudad del Este.",
      description: [
        "In April, a donation was made to the Regional Hospital of Ciudad del Este.",
        "The action was carried out by Datapar.",
        "The donation consisted of an air conditioner to support the needs of the institution."
      ],
      dateLabel: "April",
      location: "Ciudad del Este, Paraguay"
    },
    gallery: []
  },
  {
    slug: "bebederos-escuela-minga-guazu-san-marcos",
    year: 2025,
    es: {
      title: "Donación de Bebederos",
      summary: "Donación de 3 bebederos a la Escuela Minga Guazú - San Marcos.",
      description: [
        "En mayo se realizó una donación a la Escuela Minga Guazú - San Marcos.",
        "La acción fue realizada por Datapar.",
        "La entrega consistió en 3 bebederos para la institución."
      ],
      dateLabel: "Mayo",
      location: "Minga Guazú, Paraguay"
    },
    pt: {
      title: "Doação de Bebedouros",
      summary: "Doação de 3 bebedouros para a Escola Minga Guazú - San Marcos.",
      description: [
        "Em maio, foi realizada uma doação para a Escola Minga Guazú - San Marcos.",
        "A ação foi promovida pela Datapar.",
        "A entrega consistiu em 3 bebedouros para a instituição."
      ],
      dateLabel: "Maio",
      location: "Minga Guazú, Paraguai"
    },
    en: {
      title: "Water Dispensers Donation",
      summary: "Donation of 3 water dispensers to the Minga Guazu - San Marcos School.",
      description: [
        "In May, a donation was made to the Minga Guazu - San Marcos School.",
        "The action was carried out by Datapar.",
        "The delivery consisted of 3 water dispensers for the institution."
      ],
      dateLabel: "May",
      location: "Minga Guazu, Paraguay"
    },
    gallery: []
  },
  {
    slug: "charla-salud-financiera",
    year: 2025,
    es: {
      title: "Charla Educativa: Salud Financiera",
      summary: "Charla educativa sobre salud financiera con la economista María Noelia Vargas.",
      description: [
        "En junio se realizó una charla educativa sobre salud financiera.",
        "La disertante fue la economista María Noelia Vargas.",
        "El objetivo fue promover la educación financiera entre colaboradores y participantes."
      ],
      dateLabel: "Junio",
      location: "Paraguay"
    },
    pt: {
      title: "Palestra Educativa: Saúde Financeira",
      summary: "Palestra educativa sobre saúde financeira com a economista María Noelia Vargas.",
      description: [
        "Em junho, foi realizada uma palestra educativa sobre saúde financeira.",
        "A palestrante foi a economista María Noelia Vargas.",
        "O objetivo foi promover a educação financeira entre colaboradores e participantes."
      ],
      dateLabel: "Junho",
      location: "Paraguai"
    },
    en: {
      title: "Educational Talk: Financial Health",
      summary: "Educational talk on financial health with economist Maria Noelia Vargas.",
      description: [
        "In June, an educational talk on financial health was held.",
        "The speaker was economist Maria Noelia Vargas.",
        "The goal was to promote financial education among employees and participants."
      ],
      dateLabel: "June",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "aero-san-juan-hernandarias",
    year: 2025,
    es: {
      title: "Participación en Aero San Juan",
      summary: "Participación en el evento solidario Aero San Juan en Hernandarias.",
      description: [
        "En julio Joaju participó en el evento solidario Aero San Juan, realizado en Hernandarias.",
        "El propósito del evento fue la recaudación de fondos para causas sociales.",
        "La participación permitió acompañar una iniciativa comunitaria orientada al apoyo solidario."
      ],
      dateLabel: "Julio",
      location: "Hernandarias, Paraguay"
    },
    pt: {
      title: "Participação no Aero San Juan",
      summary: "Participação no evento solidário Aero San Juan em Hernandarias.",
      description: [
        "Em julho, o Joaju participou do evento solidário Aero San Juan, realizado em Hernandarias.",
        "O propósito do evento foi arrecadar fundos para causas sociais.",
        "A participação permitiu apoiar uma iniciativa comunitária voltada para a solidariedade."
      ],
      dateLabel: "Julho",
      location: "Hernandarias, Paraguai"
    },
    en: {
      title: "Participation in Aero San Juan",
      summary: "Participation in the solidary event Aero San Juan in Hernandarias.",
      description: [
        "In July, Joaju participated in the solidary event Aero San Juan, held in Hernandarias.",
        "The purpose of the event was to raise funds for social causes.",
        "The participation allowed supporting a community initiative oriented toward solidarity."
      ],
      dateLabel: "July",
      location: "Hernandarias, Paraguay"
    },
    gallery: []
  },
  {
    slug: "colecta-anual-apostar-por-la-vida-2025",
    year: 2025,
    es: {
      title: "Colecta Anual Apostar por la Vida",
      summary: "Participación en la Colecta Anual Apostar por la Vida.",
      description: [
        "En agosto Joaju participó en el evento solidario Colecta Anual - Apostar por la Vida.",
        "La actividad formó parte de las acciones solidarias del año.",
        "La participación acompañó una causa social orientada a generar apoyo desde la comunidad."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Coleta Anual Apostar por la Vida",
      summary: "Participação na Coleta Anual Apostar por la Vida.",
      description: [
        "Em agosto, o Joaju participou do evento solidário Coleta Anual - Apostar por la Vida.",
        "A atividade fez parte das ações solidárias do ano.",
        "A participação apoiou uma causa social voltada a mobilizar apoio na comunidade."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Apostar por la Vida Annual Drive",
      summary: "Participation in the Apostar por la Vida Annual Drive.",
      description: [
        "In August, Joaju participated in the solidary event Annual Drive - Apostar por la Vida.",
        "The activity was part of the solidarity actions of the year.",
        "The participation supported a social cause aimed at generating support from the community."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "bienestar-integral-salud-mental",
    year: 2025,
    es: {
      title: "Bienestar Integral y Salud Mental",
      summary: "Actividad orientada a promover el bienestar integral y la salud mental en el entorno laboral.",
      description: [
        "En agosto se realizó una actividad con foco en el bienestar integral y la salud mental.",
        "El objetivo fue promover hábitos, conversaciones y herramientas de cuidado dentro del entorno laboral.",
        "La iniciativa buscó acompañar a colaboradores y participantes desde una mirada humana y preventiva."
      ],
      dateLabel: "Agosto",
      location: "Paraguay"
    },
    pt: {
      title: "Bem-estar Integral e Saúde Mental",
      summary: "Atividade voltada para promover o bem-estar integral e a saúde mental no ambiente de trabalho.",
      description: [
        "Em agosto, foi realizada uma atividade focada no bem-estar integral e na saúde mental.",
        "O objetivo foi promover hábitos, diálogos e ferramentas de cuidado no ambiente profissional.",
        "A iniciativa buscou acompanhar colaboradores e participantes a partir de uma abordagem humana e preventiva."
      ],
      dateLabel: "Agosto",
      location: "Paraguai"
    },
    en: {
      title: "Integral Well-being and Mental Health",
      summary: "Activity oriented to promote integral well-being and mental health in the workplace.",
      description: [
        "In August, an activity focusing on integral well-being and mental health was held.",
        "The goal was to promote habits, conversations, and care tools within the workplace.",
        "The initiative sought to support employees and participants from a human and preventive perspective."
      ],
      dateLabel: "August",
      location: "Paraguay"
    },
    gallery: []
  },
  {
    slug: "auspicio-comunidad-km-7-ciudad-nueva",
    year: 2025,
    es: {
      title: "Auspicio Comunidad Km 7",
      summary: "Participación como auspiciante con una donación simbólica de golosinas para la comunidad del Km 7.",
      description: [
        "En agosto Joaju participó como auspiciante con una donación simbólica de golosinas.",
        "La actividad benefició a la comunidad del Km 7, Barrio Ciudad Nueva.",
        "El acompañamiento permitió estar presentes en una iniciativa comunitaria desde un gesto cercano y solidario."
      ],
      dateLabel: "Agosto",
      location: "Km 7, Barrio Ciudad Nueva"
    },
    pt: {
      title: "Patrocínio Comunidade Km 7",
      summary: "Participação como patrocinador com uma doação simbólica de doces para a comunidade do Km 7.",
      description: [
        "Em agosto, o Joaju participou como patrocinador com uma doação simbólica de doces.",
        "A atividade beneficiou a comunidade do Km 7, no Bairro Ciudad Nueva.",
        "O apoio permitiu marcar presença em uma iniciativa comunitária através de um gesto afetuoso e solidário."
      ],
      dateLabel: "Agosto",
      location: "Km 7, Bairro Ciudad Nueva"
    },
    en: {
      title: "Km 7 Community Sponsorship",
      summary: "Participation as a sponsor with a symbolic donation of candies for the Km 7 community.",
      description: [
        "In August, Joaju participated as a sponsor with a symbolic donation of candies.",
        "The activity benefited the Km 7 community in the Ciudad Nueva neighborhood.",
        "The support allowed us to be present in a community initiative through a close and solidary gesture."
      ],
      dateLabel: "August",
      location: "Km 7, Ciudad Nueva Neighborhood"
    },
    gallery: []
  },
  {
    slug: "donacion-comunidad-indigena-km-12-monday",
    year: 2025,
    es: {
      title: "Donación a Comunidad Indígena",
      summary: "Donación de 25 cajas con alimentos no perecederos y artículos de primera necesidad.",
      description: [
        "En octubre se realizó una donación destinada a una comunidad indígena ubicada en Km 12 Monday, Ciudad del Este.",
        "La actividad fue organizada por todos los miembros del Comité Joaju y compañeros de Datapar.",
        "La acción benefició directamente a 25 familias, aproximadamente 70 personas.",
        "Se entregaron 25 cajas con más de 250 alimentos no perecederos y artículos de primera necesidad."
      ],
      dateLabel: "Octubre",
      location: "Km 12 Monday, Ciudad del Este"
    },
    pt: {
      title: "Doação para Comunidade Indígena",
      summary: "Doação de 25 caixas com alimentos não perecíveis e artigos de primeira necessidade.",
      description: [
        "Em outubro, foi realizada uma doação destinada a uma comunidade indígena localizada no Km 12 Monday, Ciudad del Este.",
        "A atividade foi organizada por todos os membros do Comitê Joaju e colegas da Datapar.",
        "A ação beneficiou diretamente 25 famílias, totalizando aproximadamente 70 pessoas.",
        "Foram entregues 25 caixas contendo mais de 250 alimentos não perecíveis e artigos de primeira necessidade."
      ],
      dateLabel: "Outubro",
      location: "Km 12 Monday, Ciudad del Este"
    },
    en: {
      title: "Donation to Indigenous Community",
      summary: "Donation of 25 boxes containing non-perishable food and essential goods.",
      description: [
        "In October, a donation was made to an indigenous community located at Km 12 Monday, Ciudad del Este.",
        "The activity was organized by all members of the Joaju Committee and colleagues from Datapar.",
        "The action directly benefited 25 families, approximately 70 people.",
        "25 boxes with more than 250 non-perishable food items and essential goods were delivered."
      ],
      dateLabel: "October",
      location: "Km 12 Monday, Ciudad del Este"
    },
    gallery: []
  },
  {
    slug: "banco-de-sangre",
    year: 2026,
    es: {
      title: "Banco de Sangre",
      summary: "Jornada solidaria orientada a promover la donación voluntaria y la conciencia sobre su impacto.",
      description: [
        "La iniciativa Banco de Sangre busca conectar a la comunidad con una forma concreta de salvar vidas a través de la donación.",
        "La actividad combina difusión, convocatoria y acompañamiento para que más personas puedan sumarse de manera informada y segura.",
        "Además de la jornada principal, se trabaja en sensibilización para instalar el tema como parte de una cultura solidaria sostenida."
      ],
      dateLabel: "Abril",
      location: "Asunción, Paraguay"
    },
    pt: {
      title: "Banco de Sangue",
      summary: "Jornada solidária voltada para promover a doação voluntária e a conscientização sobre o seu impacto.",
      description: [
        "A iniciativa Banco de Sangue busca conectar a comunidade com uma forma concreta de salvar vidas através da doação.",
        "A atividade combina divulgação, convocação e acompanhamento para que mais pessoas possam se unir de forma informada e segura.",
        "Além do dia principal da campanha, trabalha-se na conscientização para instalar o tema como parte de uma cultura solidária contínua."
      ],
      dateLabel: "Abril",
      location: "Assunção, Paraguai"
    },
    en: {
      title: "Blood Bank",
      summary: "Solidarity drive oriented to promote voluntary donation and awareness of its impact.",
      description: [
        "The Blood Bank initiative seeks to connect the community with a concrete way to save lives through donation.",
        "The activity combines dissemination, outreach, and guidance so that more people can join in an informed and safe manner.",
        "In addition to the main drive day, work is done on raising awareness to establish the topic as part of a sustained solidary culture."
      ],
      dateLabel: "April",
      location: "Asuncion, Paraguay"
    },
    heroImage: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=700&q=75"
    ]
  },
  {
    slug: "capacitacion-primeros-auxilios",
    year: 2026,
    es: {
      title: "Capacitación Primeros Auxilios",
      summary: "Formación para actuar con rapidez, cuidado y responsabilidad en situaciones de emergencia.",
      description: [
        "La capacitación está pensada para brindar herramientas prácticas a voluntarios y participantes de la comunidad.",
        "Se trabajan nociones de prevención, asistencia inicial y respuesta organizada frente a distintos tipos de emergencias.",
        "Esta actividad refuerza la idea de que el voluntariado también se construye con preparación y aprendizaje compartido."
      ],
      dateLabel: "Junio",
      location: "Asunción, Paraguay"
    },
    pt: {
      title: "Capacitação em Primeiros Socorros",
      summary: "Treinamento para agir com rapidez, cuidado e responsabilidade em situações de emergência.",
      description: [
        "A capacitação foi pensada para fornecer ferramentas práticas aos voluntários e participantes da comunidade.",
        "São trabalhadas noções de prevenção, assistência inicial e resposta organizada frente a diferentes tipos de emergências.",
        "Esta atividade reforça a ideia de que o voluntariado também é construído com preparação e aprendizagem compartilhada."
      ],
      dateLabel: "Junho",
      location: "Assunção, Paraguai"
    },
    en: {
      title: "First Aid Training",
      summary: "Training to act quickly, carefully, and responsibly in emergency situations.",
      description: [
        "The training is designed to provide practical tools to volunteers and community participants.",
        "Notions of prevention, initial assistance, and organized response to different types of emergencies are covered.",
        "This activity reinforces the idea that volunteering is also built on preparation and shared learning."
      ],
      dateLabel: "June",
      location: "Asuncion, Paraguay"
    },
    heroImage: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=700&q=75"
    ]
  },
  {
    slug: "campana-manos-que-abrigan",
    year: 2026,
    es: {
      title: "Campaña Manos que Abrigan",
      summary: "Acción solidaria enfocada en la recolección y entrega de abrigo para personas que más lo necesitan.",
      description: [
        "La campaña convoca a colaboradores, familias, amigos y clientes para reunir ropa de invierno y otros insumos esenciales.",
        "Además de la recolección, se organizan jornadas de clasificación, armado de kits y entrega acompañada por voluntarios.",
        "Es una propuesta que expresa con claridad el costado más cálido y cercano de Joaju."
      ],
      dateLabel: "Invierno",
      location: "Asunción y Central"
    },
    pt: {
      title: "Campanha Mãos que Acolhem",
      summary: "Ação solidária focada na coleta e entrega de agasalhos para as pessoas que mais precisam.",
      description: [
        "A campanha convoca colaboradores, famílias, amigos e clientes para reunir roupas de inverno e outros insumos essenciais.",
        "Além da coleta, são organizados dias de triagem, montagem de kits e entregas acompanhadas por voluntários.",
        "É uma proposta que expressa claramente o lado mais caloroso e acolhedor do Joaju."
      ],
      dateLabel: "Inverno",
      location: "Assunção e Central"
    },
    en: {
      title: "Hands that Warm Campaign",
      summary: "Solidarity campaign focused on gathering and delivering warm clothes to those who need them most.",
      description: [
        "The campaign calls upon colleagues, families, friends, and clients to gather winter clothing and other essential supplies.",
        "In addition to collection, cleanup days are organized for sorting, assembling kits, and delivering items guided by volunteers.",
        "It is a proposal that clearly expresses Joaju's warmest and closest side."
      ],
      dateLabel: "Winter",
      location: "Asuncion and Central"
    },
    heroImage: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=1000&q=75",
    gallery: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=700&q=75",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=75"
    ]
  }
];

export function getLocalizedActivity(item: LocalizedActivityItem, lang: string): ActivityItem {
  const langKey = (lang === "pt" || lang === "en" || lang === "es") ? lang : "es";
  const localizedFields = item[langKey];
  return {
    slug: item.slug,
    year: item.year,
    heroImage: item.heroImage,
    gallery: item.gallery,
    title: localizedFields.title,
    summary: localizedFields.summary,
    description: localizedFields.description,
    dateLabel: localizedFields.dateLabel,
    location: localizedFields.location
  };
}

export const activities = rawActivities;

export const activitiesByYear = activityYears.map((year) => ({
  year,
  items: rawActivities.filter((activity) => activity.year === year)
}));

export function getYearActivities(year: number, lang: string = "es"): ActivityItem[] {
  return rawActivities
    .filter((activity) => activity.year === year)
    .map((activity) => getLocalizedActivity(activity, lang));
}

export function getActivity(year: number, slug: string, lang: string = "es"): ActivityItem | undefined {
  const item = rawActivities.find((activity) => activity.year === year && activity.slug === slug);
  if (!item) return undefined;
  return getLocalizedActivity(item, lang);
}
