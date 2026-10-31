export type ProjectCategory = "web" | "mobile" | "ai-web3";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectHighlight {
  metric: string;
  label: string;
}

export interface ProjectGalleryItem {
  url: string;
  caption: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge?: string;
  period: string;
  clientOrContext: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  highlights: ProjectHighlight[];
  features: ProjectFeature[];
  coverImage: string;
  gallery: ProjectGalleryItem[];
  videoEmbed?: string;
  techSummary: {
    frontend: string;
    backend: string;
    infraAndData: string;
  };
  tags: string[];
  links: {
    live?: string;
    liveLabel?: string;
    secondaryLive?: string;
    secondaryLiveLabel?: string;
    playStore?: string;
    github?: string;
    linkedinPost?: string;
    pressUrl?: string;
    instagram?: string;
  };
  featured: boolean;
}

export interface MilestoneItem {
  id: string;
  date: string;
  type: "premio" | "prensa" | "lanzamiento";
  typeLabel: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  image?: string;
  relatedProjectSlug?: string;
  links: {
    label: string;
    url: string;
    external?: boolean;
  }[];
}

export interface TeamMember {
  name: string;
  shortName: string;
  role: string;
  specialtyTag: string;
  photo: string;
  bio: string;
  skills: string[];
  linkedin: string;
  github: string;
  portfolio?: string;
}

export const projectsData: ProjectItem[] = [
  {
    slug: "duo-propiedades",
    title: "DÚO Propiedades",
    subtitle: "Plataforma Inmobiliaria, Catálogo Interactivo & Panel de Gestión",
    category: "web",
    categoryLabel: "Plataforma Web & CRM",
    badge: "En Producción · Cliente Real",
    period: "2026 — Presente",
    clientOrContext: "DÚO Propiedades (Pirané, Formosa)",
    shortDescription:
      "Plataforma web pensada para digitalizar el catálogo de inmuebles, recibir solicitudes de tasación online y administrar propiedades de forma simple desde cualquier dispositivo.",
    challenge:
      "La inmobiliaria necesitaba un canal digital claro para recibir consultas de campañas publicitarias, mostrar su catálogo de inmuebles (casas, terrenos y locales) actualizado y captar propietarios interesados en tasar o vender, manteniendo costos operativos bajos.",
    solution:
      "Desarrollamos una plataforma mobile-first con tres módulos integrados: una portada comercial con accesos rápidos (Comprar, Alquilar, Tasar), un catálogo público con filtros dinámicos y estados en vivo, y un panel interno desde donde la inmobiliaria carga fotos, edita fichas técnicas y gestiona solicitudes de tasación.",
    highlights: [
      { metric: "3 Flujos", label: "Compra, Alquiler y Tasación Online" },
      { metric: "En Vivo", label: "Estados: Disponible, Reservado o En Negociación" },
      { metric: "Autogestión", label: "Panel interno para cargar y editar propiedades" },
      { metric: "Mobile-First", label: "Adaptado para consultas desde celulares y redes" },
    ],
    features: [
      {
        title: "Catálogo Interactivo con Filtros",
        description:
          "Los interesados buscan y filtran propiedades por operación, categoría (Casas, Terrenos, Locales), ubicación, rango de precio y superficie en metros cuadrados.",
      },
      {
        title: "Fichas de Propiedad con Estado Actualizado",
        description:
          "Cada inmueble muestra galería de fotos, servicios disponibles, especificaciones técnicas, ubicación y etiquetas de estado (Disponible, En Negociación, Reservado).",
      },
      {
        title: "Recepción de Solicitudes de Tasación",
        description:
          "Formulario guiado para propietarios que desean tasar o poner en venta su inmueble, registrando las características principales y su contacto de WhatsApp.",
      },
      {
        title: "Panel de Administración Interno",
        description:
          "Acceso privado para que el equipo de la inmobiliaria pueda dar de alta propiedades, subir fotos y actualizar estados comerciales sin depender de soporte técnico.",
      },
    ],
    coverImage: "/projects/duo-propiedades/1.png",
    gallery: [
      { url: "/projects/duo-propiedades/1.png", caption: "Portada principal y accesos directos" },
      { url: "/projects/duo-propiedades/2.png", caption: "Sección de acciones rápidas: Comprar, Alquilar y Tasar" },
      { url: "/projects/duo-propiedades/4.png", caption: "Catálogo interactivo con filtros por tipo de inmueble, zona y precio" },
      { url: "/projects/duo-propiedades/7.png", caption: "Vista detallada de propiedad con galería y especificaciones" },
      { url: "/projects/duo-propiedades/11.png", caption: "Formulario de solicitud de tasación online para propietarios" },
      { url: "/projects/duo-propiedades/15.png", caption: "Panel administrativo interno para gestión de inventario" },
      { url: "/projects/duo-propiedades/18.png", caption: "Edición de estados comerciales (Disponible, Reservado, En Negociación)" },
      { url: "/projects/duo-propiedades/21.png", caption: "Gestión centralizada de consultas y solicitudes de tasación" },
    ],
    techSummary: {
      frontend: "Next.js (App Router), React, TypeScript y Tailwind CSS.",
      backend: "Next.js Server Actions / API Routes y autenticación con Supabase Auth.",
      infraAndData: "Base de datos PostgreSQL, Supabase Storage para imágenes y despliegue en Vercel.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
    links: {
      live: "https://www.duopropiedades.com.ar/",
      liveLabel: "Visitar Web en Vivo",
    },
    featured: true,
  },
  {
    slug: "datebox",
    title: "DateBox",
    subtitle: "App Móvil para Coordinar Salidas Grupales & Plataforma para Comercios",
    category: "mobile",
    categoryLabel: "App Móvil & Portal Web",
    badge: "Google Play · Producto Propio",
    period: "2026 — Presente",
    clientOrContext: "Asymmetric Devs (Pre-incubado en Programa EBT Chaco)",
    shortDescription:
      "Aplicación móvil (Android e iOS) y portal para comercios que simplifica la organización de salidas con amigos o pareja: cruza horarios disponibles, sugiere planes locales con IA y conecta locales gastronómicos con grupos.",
    challenge:
      "Coordinar una salida en grupo suele complicarse al intentar coincidir en horarios y decidir adónde ir. Al mismo tiempo, los comercios gastronómicos y culturales locales buscan llegar a grupos de personas que están planeando una salida en su zona.",
    solution:
      "Desarrollamos DateBox: una aplicación móvil donde cada grupo carga sus horarios libres para encontrar coincidencias automáticamente, recibe sugerencias de actividades mediante agentes de IA según sus preferencias y presupuesto, guarda álbumes de fotos compartidos y descubre propuestas de comercios locales cargadas desde un panel web administrativo.",
    highlights: [
      { metric: "Google Play", label: "App móvil publicada + Portal Web para comercios" },
      { metric: "Agenda Grupal", label: "Detección automática de horarios en común" },
      { metric: "Agentes IA", label: "Sugerencias según gustos, zona y presupuesto" },
      { metric: "Canal B2B", label: "Panel web para bares, restaurantes y eventos" },
    ],
    features: [
      {
        title: "Cruce de Horarios y Votación Grupal",
        description:
          "Cada integrante marca sus franjas libres y la app identifica automáticamente los días y horarios en que todos coinciden.",
      },
      {
        title: "Sugerencias de Planes y Gastronomía con IA",
        description:
          "Un motor de recomendación analiza las preferencias del grupo, ubicación y presupuesto para proponer bares, restaurantes, eventos y actividades.",
      },
      {
        title: "Álbumes y Recuerdos Compartidos",
        description:
          "Permite subir fotos de cada salida y armar un historial compartido con los lugares visitados por el grupo.",
      },
      {
        title: "Portal Web para Comercios (admin.datebox.com.ar)",
        description:
          "Plataforma donde locales gastronómicos y organizadores de eventos publican promociones y destacan sus propuestas dentro de la aplicación.",
      },
    ],
    coverImage: "/projects/datebox/1.png",
    gallery: [
      { url: "/projects/datebox/1.png", caption: "Presentación general de DateBox" },
      { url: "/projects/datebox/2.png", caption: "Creación y coordinación de grupos en la app" },
      { url: "/projects/datebox/3.png", caption: "Sincronización de disponibilidad horaria entre amigos" },
      { url: "/projects/datebox/4.png", caption: "Recomendaciones personalizadas de planes y locales" },
      { url: "/projects/datebox/5.png", caption: "Exploración de comercios gastronómicos y eventos locales" },
      { url: "/projects/datebox/6.png", caption: "Álbum compartido de recuerdos y fotos de cada salida" },
      { url: "/projects/datebox/7.png", caption: "Propuesta comercial para locales y marcas" },
      { url: "/projects/datebox/8.png", caption: "Ecosistema DateBox: App Móvil y Portal de Comercios" },
    ],
    videoEmbed: "https://www.youtube.com/embed/Xh6E90fD3_k",
    techSummary: {
      frontend: "React Native + Expo (Android/iOS), NativeWind, y React + Vite para Landing y Portal de Comercios.",
      backend: "API en Hono sobre Cloudflare Workers + Agentes de recomendación en Python con LangGraph.",
      infraAndData: "Supabase (PostgreSQL, Auth, Storage, Realtime), Monorepo con Turborepo y CI/CD en GitHub Actions.",
    },
    tags: ["React Native", "Expo", "Cloudflare Workers", "Hono", "LangGraph (IA)", "Supabase", "TypeScript"],
    links: {
      live: "https://datebox.com.ar",
      liveLabel: "Ver Landing Oficial",
      secondaryLive: "https://admin.datebox.com.ar",
      secondaryLiveLabel: "Portal Comercios",
      playStore: "https://play.google.com/store/apps/details?id=datebox.com.ar",
      instagram: "https://www.instagram.com/datebox.app",
    },
    featured: true,
  },
  {
    slug: "dosel",
    title: "DOSEL",
    subtitle: "Verificación Satelital y Trazabilidad Blockchain de Créditos de Carbono",
    category: "ai-web3",
    categoryLabel: "Satélites & Blockchain",
    badge: "1° Puesto Track Stellar · NEATECH 2026",
    period: "Octubre 2026",
    clientOrContext: "Ideatón NEA TECH 2026 (Corrientes)",
    shortDescription:
      "Plataforma para dar trazabilidad al mercado de bonos de carbono del bosque nativo: combina imágenes satelitales de Sentinel-2 con contratos inteligentes en Stellar (Soroban) para verificar que el monte siga en pie antes de emitir o transferir certificados.",
    challenge:
      "En el mercado tradicional de créditos de carbono, las auditorías presenciales son costosas, demoran meses y dificultan comprobar de forma continua que el predio forestal que respalda un bono no haya sufrido desmontes posteriores.",
    solution:
      "Desarrollamos DOSEL durante los 3 días del Ideatón NEA TECH 2026 (1° Puesto en el Track de Stellar). El sistema consulta imágenes satelitales de Sentinel-2 (10m de resolución) sobre lotes registrados del Gran Chaco, calcula el índice de vegetación (NDVI) cruzado con mapas de cobertura de suelo y habilita en el contrato inteligente la emisión de tokens GTON (1 GTON = 1 tCO2e) solo si el bosque se mantiene conservado. Si detecta una caída abrupta del índice vegetal, congela preventivamente el lote.",
    highlights: [
      { metric: "1° Puesto", label: "Track Stellar en Ideatón NEA TECH 2026" },
      { metric: "Sentinel-2", label: "Verificación con imágenes satelitales a 10m de resolución" },
      { metric: "Bloqueo Auto", label: "Pausa preventiva del lote ante caída del índice vegetal" },
      { metric: "Trazable", label: "Compra y retiro directo con certificado en blockchain" },
    ],
    features: [
      {
        title: "Oráculo Satelital (Sentinel-2 + Cobertura de Suelo)",
        description:
          "Procesa pasadas satelitales sobre polígonos GPS registrados (El Impenetrable, Parque Nacional Chaco, Taco Pozo) midiendo el vigor del monte y contrastándolo con mapas de cobertura para evitar falsos positivos.",
      },
      {
        title: "Congelamiento Preventivo ante Desmonte",
        description:
          "Si el índice NDVI de una parcela cae por debajo del umbral establecido, el contrato inteligente detiene automáticamente nuevas emisiones de créditos hasta su revisión.",
      },
      {
        title: "Trazabilidad por Lote y Período",
        description:
          "Cada crédito conserva la referencia exacta de la parcela forestal y el período de verificación satelital que le dio origen.",
      },
      {
        title: "Compra y Compensación en un Paso (Buy & Retire)",
        description:
          "Las empresas compran y retiran los créditos en una misma transacción sobre Stellar Soroban, generando un certificado verificable que evita la reventa del mismo bono.",
      },
    ],
    coverImage: "/projects/dosel/app-portada.png",
    gallery: [
      { url: "/projects/dosel/app-portada.png", caption: "Pantalla principal de DOSEL" },
      { url: "/projects/dosel/app-predios.png", caption: "Monitoreo de predios forestales del Gran Chaco e índice NDVI" },
      { url: "/projects/dosel/app-cobertura.png", caption: "Cruce de señal satelital Sentinel-2 con mapa de cobertura de suelo" },
      { url: "/projects/dosel/sat-impen.png", caption: "Imagen satelital procesada sobre lote en El Impenetrable" },
      { url: "/projects/dosel/app-mercado.png", caption: "Mercado de lotes verificados" },
      { url: "/projects/dosel/app-modal.png", caption: "Flujo de compra y retiro (Buy & Retire) con billetera Stellar" },
      { url: "/projects/dosel/certificado-pdf.png", caption: "Certificado de compensación con trazabilidad en blockchain" },
    ],
    videoEmbed: "https://www.youtube.com/embed/Uxa_8bNBiZ4",
    techSummary: {
      frontend: "React, TypeScript y Vite con integración de billetera Freighter.",
      backend: "Oráculo satelital en Python (Planetary Computer STAC API, Sentinel-2 L2A, Rasterio, NumPy).",
      infraAndData: "Contratos inteligentes en Rust sobre Stellar (Soroban SDK) + versión en Hedera (Solidity HSCS + HCS).",
    },
    tags: ["Stellar (Soroban)", "Rust", "Python", "Sentinel-2", "React", "TypeScript"],
    links: {
      live: "https://ideathon-henna.vercel.app/",
      liveLabel: "Probar Demo Interactiva",
      secondaryLive: "https://ideathon-hedera.vercel.app/",
      secondaryLiveLabel: "Demo Track Hedera",
      github: "https://github.com/SixtoArrejin/ideathon",
      linkedinPost:
        "https://www.linkedin.com/posts/sixto-arrejin_ideathon-neatech-stellar-ugcPost-7518038677902589952-W6t7/",
    },
    featured: true,
  },
  {
    slug: "chess-study",
    title: "Chess Study",
    subtitle: "Lector PDF de Libros de Ajedrez y Tablero de Análisis con Escáner IA",
    category: "web",
    categoryLabel: "Aplicación Web & IA Local",
    badge: "Web App · IA en Navegador",
    period: "Mayo 2026",
    clientOrContext: "Desarrollo Web Open Source",
    shortDescription:
      "Aplicación web que unifica en una pantalla dividida un lector de libros de ajedrez en PDF con un tablero interactivo y un escáner con visión artificial que carga en el tablero cualquier diagrama del libro con un clic.",
    challenge:
      "Estudiar ajedrez con libros digitales suele implicar cambiar constantemente entre el lector de PDF y un tablero en otra ventana, además de perder tiempo armando a mano pieza por pieza cada posición del libro para analizar jugadas.",
    solution:
      "Construimos una aplicación web de pantalla dividida redimensionable: de un lado se lee el libro PDF con fluidez y guardado local en el navegador; del otro se analizan las variantes en el tablero. Además, haciendo clic sobre cualquier diagrama impreso del PDF, una red neuronal que se ejecuta directamente en el navegador reconoce las piezas y arma la posición en el tablero al instante.",
    highlights: [
      { metric: "1 Clic", label: "Reconocimiento de diagramas del PDF al tablero" },
      { metric: "Fluido", label: "Lectura de PDFs extensos mediante Web Workers" },
      { metric: "Guardado Local", label: "Recuerda tus libros y la última página leída" },
      { metric: "5 Temas", label: "Personalización del tablero + Modo Claro/Oscuro" },
    ],
    features: [
      {
        title: "Escáner de Diagramas en el Navegador",
        description:
          "Al hacer clic sobre un diagrama del PDF (o pegar una captura de pantalla), un modelo liviano de visión artificial detecta el tablero y ubica las piezas sin necesidad de servidores externos.",
      },
      {
        title: "Pantalla Dividida Ajustable (Split-Screen)",
        description:
          "Divisor arrastrable para ajustar el ancho del libro y del tablero en escritorio, opción de invertir paneles y diseño apilable en celulares.",
      },
      {
        title: "Modo Análisis y Editor Libre",
        description:
          "Permite alternar entre un editor libre para acomodar piezas y un modo de análisis que valida jugadas legales y registra el historial en notación algebraica.",
      },
      {
        title: "Biblioteca Clásica Incluida y Memoria de Lectura",
        description:
          "Incluye los 4 tomos del 'Tratado General de Ajedrez' de Roberto Grau listos para usar, y guarda en el navegador cualquier PDF propio junto con el número de página actual.",
      },
    ],
    coverImage: "/projects/chess-study/1-modo-claro-esmeralda.png",
    gallery: [
      {
        url: "/projects/chess-study/1-modo-claro-esmeralda.png",
        caption: "Vista en pantalla dividida: lectura del libro PDF + tablero interactivo (Modo Claro)",
      },
      {
        url: "/projects/chess-study/2-modo-oscuro-oceano.png",
        caption: "Interfaz en modo oscuro con historial de jugadas navegable",
      },
      {
        url: "/projects/chess-study/3-configuracion-claro.png",
        caption: "Panel de selección de temas de tablero, orientación y editor libre",
      },
      {
        url: "/projects/chess-study/4-configuracion-oscuro.png",
        caption: "Biblioteca de libros integrada y controles en modo oscuro",
      },
    ],
    videoEmbed: "https://www.youtube.com/embed/o91drm59cmY",
    techSummary: {
      frontend: "React 19, Vite y Tailwind CSS v4.",
      backend: "Reconocimiento de imágenes en el navegador con ONNX Runtime Web (WebAssembly) y motor chess.js.",
      infraAndData: "Renderizado PDF en segundo plano (Mozilla PDF.js) y almacenamiento local en IndexedDB.",
    },
    tags: ["React 19", "ONNX WebAssembly", "PDF.js", "chess.js", "IndexedDB", "Tailwind CSS"],
    links: {
      live: "https://chess-study.asymmetric.com.ar",
      liveLabel: "Abrir Aplicación Web",
      github: "https://github.com/SixtoArrejin/chess-study",
    },
    featured: true,
  },
  {
    slug: "pollinode",
    title: "PolliNode",
    subtitle: "Sensores Solares con Visión Artificial y Bioacústica para Polinización Agrícola",
    category: "ai-web3",
    categoryLabel: "IoT, Edge AI & Agrotech",
    badge: "3° Puesto Innovación · Rally Latam 2026",
    period: "Octubre 2026",
    clientOrContext: "Rally Latinoamericano de Innovación 2026 (Sede UTN FRRe / INTECNOR)",
    shortDescription:
      "Propuesta agroecológica desarrollada en 28 horas para el Rally Latinoamericano de Innovación: combina estaciones solares (visión artificial y bioacústica) con islas rotativas de flora nativa para mapear la actividad de polinizadores en cultivos.",
    challenge:
      "Los cultivos dependientes de polinizadores en la región sufren mermas de rendimiento por el agotamiento de nitrógeno del suelo y las zonas centrales del lote a las que las abejas nativas no llegan por su radio limitado de vuelo desde el monte.",
    solution:
      "Propusimos PolliNode junto a un esquema de Islas Biodinámicas Rotativas. Nodos solares ubicados en el cultivo registran el zumbido de vuelo (bioacústica) y capturan imágenes procesadas en el dispositivo (TinyML) para medir la presencia de polinizadores y transmitir datos vía LoRaWAN. Con esa información, el sistema genera un mapa de calor e indica dónde ubicar islas de vegetación nativa y leguminosas.",
    highlights: [
      { metric: "3° Puesto", label: "Categoría Innovación en Rally Latinoamericano 2026 (UTN FRRe)" },
      { metric: "28 Horas", label: "Prototipado en equipo durante el Rally de Innovación" },
      { metric: "Edge AI", label: "Detección por visión artificial y frecuencia de aleteo" },
      { metric: "LoRaWAN", label: "Diseño autónomo con panel solar para zonas sin señal móvil" },
    ],
    features: [
      {
        title: "Detección por Bioacústica y Visión Artificial",
        description:
          "Identifica actividad de insectos polinizadores combinando el análisis de frecuencia de su aleteo con modelos livianos de visión por computadora ejecutados en el nodo.",
      },
      {
        title: "Mapa de Actividad y Zonas sin Polinización",
        description:
          "Consolida las lecturas de las estaciones del lote para mostrar en qué sectores decae la presencia de polinizadores.",
      },
      {
        title: "Planificación de Islas de Flora Nativa",
        description:
          "Sugiere al productor puntos estratégicos para implantar corredores de flora nativa y leguminosas que actúan como refugio y fijan nitrógeno en el suelo.",
      },
      {
        title: "Conectividad Rural de Bajo Costo",
        description:
          "Pensado sobre microcontroladores ESP32-S3 con alimentación solar de 5W y comunicación por radiofrecuencia LoRaWAN.",
      },
    ],
    coverImage: "/projects/pollinode/guia-pizarron.png",
    gallery: [
      {
        url: "/projects/pollinode/guia-pizarron.png",
        caption: "Esquema general de PolliNode: Islas Rotativas, Nodos Solares IoT y Mapa de Polinización",
      },
    ],
    videoEmbed: "https://www.youtube.com/embed/qxmAHWDdtBQ",
    techSummary: {
      frontend: "Visualización de mapas de calor de polinización y alertas para el productor.",
      backend: "Modelos TinyML (espectrogramas de audio + visión artificial) y triangulación espacial.",
      infraAndData: "Arquitectura sobre nodos ESP32-S3, energía solar y red LoRaWAN.",
    },
    tags: ["Edge AI (TinyML)", "Visión Artificial", "Bioacústica", "IoT / LoRaWAN", "Agrotech"],
    links: {
      github: "https://github.com/Asymmetric-Devs/rally-innovacion-2026",
      linkedinPost:
        "https://www.linkedin.com/posts/sixto-arrejin_rallylatam2026-utnfrre-pollinode-activity-7519412922008150017-VkdQ/",
      pressUrl: "https://www.frre.utn.edu.ar/noticias/utn-frre-reconocio-a-estudiantes-destacados-en-el/",
    },
    featured: false,
  },
  {
    slug: "elepad",
    title: "Elepad",
    subtitle: "App Móvil para Adultos Mayores, Juegos Cognitivos & Álbum Familiar con IA",
    category: "mobile",
    categoryLabel: "App Móvil & Impacto Social",
    badge: "Google Play · 3° Puesto Rally Latam 2024",
    period: "2025 — 2026",
    clientOrContext: "Proyecto Final de Ingeniería & Google Play Store",
    shortDescription:
      "Aplicación móvil publicada en Google Play que conecta a adultos mayores con sus familias mediante una interfaz clara y accesible, juegos diarios de memoria y un álbum familiar asistido por IA.",
    challenge:
      "Muchas aplicaciones actuales tienen menús complejos y textos pequeños que dificultan su uso por parte de adultos mayores, complicando su integración digital y el contacto cotidiano con su grupo familiar.",
    solution:
      "Nacida en el Rally Latinoamericano de Innovación 2024 (3° puesto en Impacto Social) y luego desarrollada por el equipo como Proyecto Final de Ingeniería en Sistemas, Elepad ofrece una interfaz adaptada, minijuegos diarios de estimulación cognitiva, seguimiento de actividad y un módulo con Google Gemini que ayuda a redactar y organizar recuerdos familiares.",
    highlights: [
      { metric: "Google Play", label: "Aplicación publicada en la tienda oficial de Android" },
      { metric: "3° Puesto", label: "Categoría Impacto Social en Rally Latam 2024" },
      { metric: "Álbum con IA", label: "Redacción y síntesis de recuerdos con Google Gemini" },
      { metric: "Proyecto Final", label: "Tesis de Ingeniería en Sistemas (UTN-FRRe)" },
    ],
    features: [
      {
        title: "Interfaz Adaptada y Accesible",
        description:
          "Tipografía legible, botones amplios y navegación directa pensada para que las personas mayores la utilicen con comodidad.",
      },
      {
        title: "Juegos Cognitivos y Seguimiento Familiar",
        description:
          "Incluye juegos para ejercitar memoria, atención y lógica (Memoria, Sudoku, Lights Out) con estadísticas compartidas con la familia.",
      },
      {
        title: "El Álbum: Recuerdos Familiares con IA",
        description:
          "Utiliza Google Gemini para transformar fotos y anécdotas cotidianas en relatos organizados dentro de un álbum familiar compartido.",
      },
      {
        title: "Sincronización en Tiempo Real con la Familia",
        description:
          "Conecta las cuentas de los familiares y del adulto mayor mediante notificaciones push, inicio de sesión con Google y almacenamiento en la nube.",
      },
    ],
    coverImage: "/projects/elepad/1.jpg",
    gallery: [
      { url: "/projects/elepad/1.jpg", caption: "Presentación general de la app móvil Elepad" },
      { url: "/projects/elepad/2.jpg", caption: "Pantalla de inicio accesible y vínculo con el grupo familiar" },
      { url: "/projects/elepad/3.jpg", caption: "Módulo de estimulación cognitiva y juegos diarios" },
      { url: "/projects/elepad/4.jpg", caption: "El Álbum: recuerdos familiares asistidos por IA" },
      { url: "/projects/elepad/5.jpg", caption: "Seguimiento de rachas y actividad compartida" },
      { url: "/projects/elepad/system-architecture.png", caption: "Diagrama de arquitectura con Cloudflare Workers, Hono y Supabase" },
    ],
    techSummary: {
      frontend: "React Native, Expo y TypeScript.",
      backend: "API en Hono sobre Cloudflare Workers con validación OpenAPI + integración con Google Gemini.",
      infraAndData: "Supabase (PostgreSQL, Google OAuth, Storage, Realtime), Turborepo y builds con Expo EAS.",
    },
    tags: ["React Native", "Expo", "Google Gemini (IA)", "Cloudflare Workers", "Supabase", "Google Play"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.elepadorg.elepad",
      github: "https://github.com/elepad-org/Elepad",
    },
    featured: false,
  },
];

export const milestonesData: MilestoneItem[] = [
  {
    id: "neatech-2026-stellar",
    date: "Octubre 2026",
    type: "premio",
    typeLabel: "1° Puesto · Ideatón NEA TECH",
    title: "1° Puesto en el Track de Stellar — Ideatón NEA TECH 2026",
    subtitle: "Proyecto DOSEL · Museo de Arte Contemporáneo de Corrientes (MACC)",
    description:
      "Luego de tres días de trabajo en Corrientes, obtuvimos el primer lugar en el track de Stellar con DOSEL: una solución que combina imágenes satelitales Sentinel-2 con contratos inteligentes en Soroban para verificar bosque nativo.",
    location: "Corrientes, Argentina",
    image: "/projects/dosel/app-portada.png",
    relatedProjectSlug: "dosel",
    links: [
      {
        label: "Ver proyecto DOSEL",
        url: "/proyectos/dosel",
        external: false,
      },
      {
        label: "Publicación en LinkedIn",
        url: "https://www.linkedin.com/posts/sixto-arrejin_ideathon-neatech-stellar-ugcPost-7518038677902589952-W6t7/",
        external: true,
      },
    ],
  },
  {
    id: "radio-neatech-2026",
    date: "Octubre 2026",
    type: "prensa",
    typeLabel: "Nota en Radio",
    title: "Participación en radio tras el Ideatón NEA TECH 2026",
    subtitle: "Difusión del proyecto DOSEL y el trabajo del equipo en Corrientes y Chaco",
    description:
      "Fuimos invitados a conversar en radio sobre la verificación satelital de bosques nativos con DOSEL, nuestra participación simultánea en el Rally de Innovación y los desarrollos en marcha en Asymmetric.",
    location: "Corrientes / Chaco",
    relatedProjectSlug: "dosel",
    links: [
      {
        label: "Ver proyecto DOSEL",
        url: "/proyectos/dosel",
        external: false,
      },
      {
        label: "Nota en El Litoral",
        url: "https://www.ellitoral.com.ar/sociedad/2026-10-18-15-53-0-corrientes-reunio-a-empresas-y-emprendedores-en-la-primera-edicion-de-nea-tech",
        external: true,
      },
    ],
  },
  {
    id: "rally-latam-2026",
    date: "Octubre 2026",
    type: "premio",
    typeLabel: "3° Puesto · Rally Latam 2026",
    title: "3° Puesto en Innovación — Rally Latinoamericano de Innovación 2026",
    subtitle: "Proyecto PolliNode · Sede UTN Facultad Regional Resistencia / INTECNOR",
    description:
      "Participamos durante 28 horas continuas en el Rally Latinoamericano y logramos el 3° puesto en Innovación con PolliNode: sensores solares con visión artificial y bioacústica para protección de polinizadores nativos.",
    location: "Resistencia, Chaco",
    image: "/projects/pollinode/guia-pizarron.png",
    relatedProjectSlug: "pollinode",
    links: [
      {
        label: "Ver proyecto PolliNode",
        url: "/proyectos/pollinode",
        external: false,
      },
      {
        label: "Publicación en LinkedIn",
        url: "https://www.linkedin.com/posts/sixto-arrejin_rallylatam2026-utnfrre-pollinode-activity-7519412922008150017-VkdQ/",
        external: true,
      },
    ],
  },
  {
    id: "rally-latam-2024-elepad",
    date: "2024 — 2026",
    type: "lanzamiento",
    typeLabel: "Proyecto Final & Google Play",
    title: "Del Rally de Innovación 2024 a publicar Elepad en Google Play Store",
    subtitle: "3° Puesto en Impacto Social (UTN-FRRe) y Proyecto Final de Ingeniería",
    description:
      "Elepad nació con el 3° puesto en Impacto Social en el Rally Latam 2024. Lo consolidamos como Proyecto Final de Ingeniería en Sistemas y ya se encuentra publicado y disponible en Google Play Store.",
    location: "Resistencia / Corrientes",
    image: "/projects/elepad/1.jpg",
    relatedProjectSlug: "elepad",
    links: [
      {
        label: "Ver proyecto Elepad",
        url: "/proyectos/elepad",
        external: false,
      },
      {
        label: "Ver en Google Play",
        url: "https://play.google.com/store/apps/details?id=com.elepadorg.elepad",
        external: true,
      },
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Sixto Feliciano Arrejin",
    shortName: "Sixto Arrejin",
    role: "Ingeniero en Sistemas · Full Stack & Mobile Developer",
    specialtyTag: "Web, Mobile & Cloud",
    photo: "/team/sixto-arrejin.jpg",
    bio: "Desarrollador Full Stack y Mobile con foco en React, Next.js, React Native y Node.js. Lideró el desarrollo de plataformas comerciales en producción (DÚO Propiedades), sistemas institucionales para UTN y aplicaciones publicadas en Google Play.",
    skills: ["Next.js", "React Native", "TypeScript", "Node.js", "Supabase", "Docker & CI/CD"],
    linkedin: "https://www.linkedin.com/in/sixto-arrejin/",
    github: "https://github.com/SixtoArrejin",
    portfolio: "https://sixto-arrejin.asymmetric.com.ar",
  },
  {
    name: "Aldo Omar Andres",
    shortName: "Aldo Andres",
    role: "Ingeniero en Sistemas · Full Stack & Mobile Specialist",
    specialtyTag: "Mobile & DevSecOps",
    photo: "/team/aldo-andres.jpg",
    bio: "Ingeniero enfocado en el desarrollo de aplicaciones móviles multiplataforma con React Native y Expo, diseño de arquitecturas escalables y prácticas DevSecOps para garantizar rendimiento y seguridad.",
    skills: ["React Native", "Expo", "TypeScript", "Python", "DevSecOps", "Cloudflare Workers"],
    linkedin: "https://www.linkedin.com/in/aldo-omar-andres-a0b54b218/",
    github: "https://github.com/AldoOmarAndres",
  },
  {
    name: "André Leandro San Lorenzo",
    shortName: "André San Lorenzo",
    role: "Ingeniero en Sistemas · Datos, IA & Backend",
    specialtyTag: "Ciencia de Datos & IA",
    photo: "/team/andre-san-lorenzo.jpg",
    bio: "Especialista en Ciencia de Datos, agentes inteligentes con modelos de lenguaje (LLMs / LangGraph) y arquitecturas backend en Python. Diseña motores de recomendación, análisis satelital y contratos inteligentes.",
    skills: ["Python", "LangGraph & IA", "Ciencia de Datos", "FastAPI", "Smart Contracts", "Kubernetes"],
    linkedin: "https://www.linkedin.com/in/andre-leandro-san-lorenzo/",
    github: "https://github.com/Andre-Leandro",
  },
  {
    name: "Tobias Alejandro Maciel Meister",
    shortName: "Tobías Maciel Meister",
    role: "Ingeniero en Sistemas · Full Stack & Automatización con IA",
    specialtyTag: "Automatización & Cloud",
    photo: "/team/tobias-maciel.jpg",
    bio: "Desarrollador Full Stack con experiencia en automatización de procesos mediante agentes de IA para WhatsApp y CRM, integración de facturación electrónica y despliegues en la nube (AWS y Docker).",
    skills: ["React & Next.js", "Python & Node.js", "Agentes IA / MCP", "AWS & Docker", "CI/CD", "PostgreSQL"],
    linkedin: "https://www.linkedin.com/in/tobias-alejandro-maciel-meister-41ba39218/",
    github: "https://github.com/TobiasMaciel",
    portfolio: "https://tobiasmaciel.github.io/Portfolio/",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
