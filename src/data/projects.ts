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
    subtitle: "Plataforma Inmobiliaria, Catálogo Interactivo & CRM Serverless",
    category: "web",
    categoryLabel: "Plataforma Web & CRM",
    badge: "En Producción · Cliente Real",
    period: "2026 — Presente",
    clientOrContext: "DÚO Propiedades (Pirané, Formosa)",
    shortDescription:
      "Plataforma comercial mobile-first para digitalizar el inventario inmobiliario, captar propietarios mediante solicitudes de tasación online y administrar propiedades en tiempo real con costo fijo de servidores $0.",
    challenge:
      "La inmobiliaria necesitaba profesionalizar su canal digital para convertir tráfico de campañas en redes sociales, centralizar su catálogo de inmuebles (casas, terrenos y locales) y captar nuevos propietarios interesados en tasar o vender, sin incurrir en costos mensuales fijos elevados de infraestructura.",
    solution:
      "Diseñamos y desplegamos una plataforma integral mobile-first con tres frentes conectados: una portada comercial orientada a conversión rápida (Comprar, Alquilar, Tasar), un catálogo público con filtros multicriterio instantáneos y estados comerciales en vivo, y un panel administrativo privado desde donde la inmobiliaria carga fotos, edita fichas técnicas y gestiona solicitudes de tasación desde el celular o la PC.",
    highlights: [
      { metric: "3 Flujos", label: "Compra, Alquiler y Tasación Online" },
      { metric: "Tiempo Real", label: "Estados: Disponible, Reservado o En Negociación" },
      { metric: "$0 / mes", label: "Costo fijo de servidor gracias a arquitectura Serverless" },
      { metric: "100% Mobile", label: "Optimizado para pauta en Meta Ads y WhatsApp" },
    ],
    features: [
      {
        title: "Catálogo Interactivo con Filtros Inteligentes",
        description:
          "Los interesados buscan y filtran propiedades al instante por operación, categoría (Casas, Terrenos, Locales), ubicación, rango de precio y superficie en metros cuadrados.",
      },
      {
        title: "Fichas de Propiedad con Estado Comercial en Vivo",
        description:
          "Cada inmueble muestra galería fotográfica optimizada, servicios disponibles, especificaciones técnicas, ubicación y etiquetas de estado (Disponible, En Negociación, Reservado) actualizadas al instante.",
      },
      {
        title: "Embudo de Captación de Tasaciones",
        description:
          "Formulario guiado para propietarios que desean tasar o poner en venta su inmueble, capturando características clave y contacto directo de WhatsApp en una bandeja centralizada.",
      },
      {
        title: "Panel de Administración Autogestionable (CRUD)",
        description:
          "Acceso privado para el equipo de la inmobiliaria que permite dar de alta propiedades, subir múltiples fotografías a la nube y cambiar estados comerciales en segundos sin depender de soporte técnico.",
      },
    ],
    coverImage: "/projects/duo-propiedades/1.png",
    gallery: [
      { url: "/projects/duo-propiedades/1.png", caption: "Portada principal mobile-first y accesos directos de conversión" },
      { url: "/projects/duo-propiedades/2.png", caption: "Sección de acciones rápidas: Comprar, Alquilar y Tasar" },
      { url: "/projects/duo-propiedades/4.png", caption: "Catálogo interactivo con filtros por tipo de inmueble, zona y precio" },
      { url: "/projects/duo-propiedades/7.png", caption: "Vista detallada de propiedad con galería y especificaciones" },
      { url: "/projects/duo-propiedades/11.png", caption: "Formulario de solicitud de tasación online para propietarios" },
      { url: "/projects/duo-propiedades/15.png", caption: "Panel administrativo interno para gestión de inventario inmobiliario" },
      { url: "/projects/duo-propiedades/18.png", caption: "Edición de estados comerciales (Disponible, Reservado, En Negociación)" },
      { url: "/projects/duo-propiedades/21.png", caption: "Gestión centralizada de consultas y solicitudes de tasación" },
    ],
    techSummary: {
      frontend: "Next.js (App Router), React, TypeScript y Tailwind CSS con diseño responsivo mobile-first.",
      backend: "Next.js Server Actions / API Routes e integración de autenticación segura con Supabase Auth.",
      infraAndData: "Base de datos PostgreSQL y almacenamiento de imágenes en Supabase Storage; despliegue global en Vercel.",
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
    subtitle: "App Móvil de Coordinación Grupal con IA & Plataforma B2B Hiperlocal",
    category: "mobile",
    categoryLabel: "App Móvil & Producto Propio",
    badge: "Producto Asymmetric · iOS & Android",
    period: "2026 — Presente",
    clientOrContext: "Asymmetric Devs (Pre-incubado en Programa EBT Chaco)",
    shortDescription:
      "Aplicación móvil multiplataforma y ecosistema comercial B2B que elimina la fricción de organizar salidas con amigos o pareja: cruza horarios automáticamente, recomienda planes locales con IA y conecta comercios gastronómicos con grupos listos para salir.",
    challenge:
      "Organizar una salida grupal suele terminar en decenas de mensajes sin acuerdo sobre qué día pueden todos, qué hacer o adónde ir. En paralelo, los bares, restaurantes y centros de entretenimiento locales invierten en publicidad genérica sin poder llegar en el momento exacto a los grupos que están decidiendo su salida.",
    solution:
      "Creamos DateBox como producto insignia de Asymmetric: una app móvil (iOS y Android) donde los grupos sincronizan su disponibilidad horaria sin vueltas, reciben sugerencias personalizadas mediante agentes de Inteligencia Artificial según gustos y presupuesto, guardan álbumes de recuerdos compartidos y descubren promociones de comercios locales gestionadas desde un portal B2B exclusivo.",
    highlights: [
      { metric: "iOS & Android", label: "App móvil nativa multiplataforma + Portal Web B2B" },
      { metric: "Match Horario", label: "Cruce inteligente de agendas grupales sin chats eternos" },
      { metric: "Agentes IA", label: "Recomendación contextual por gustos, clima y presupuesto" },
      { metric: "Canal B2B", label: "Portal de autogestión para comercios y eventos locales" },
    ],
    features: [
      {
        title: "Sincronización de Horarios y Votación Grupal",
        description:
          "Cada integrante marca sus franjas libres en segundos y DateBox detecta automáticamente las coincidencias óptimas del grupo para confirmar fecha y hora sin discusiones interminables.",
      },
      {
        title: "Recomendador Inteligente de Planes y Gastronomía",
        description:
          "Un motor impulsado por agentes de IA analiza las preferencias compartidas del grupo, zona geográfica y presupuesto para proponer bares, restaurantes, eventos culturales y actividades recreativas.",
      },
      {
        title: "Álbumes Digitales y Recuerdos Compartidos",
        description:
          "Durante y después de cada salida, el grupo puede subir fotos y construir una bitácora compartida de momentos con historial de lugares visitados.",
      },
      {
        title: "Portal B2B para Comercios y Eventos (admin.datebox.com.ar)",
        description:
          "Plataforma web administrativa donde locales gastronómicos y productores de eventos del NEA publican beneficios, posicionan su marca y conectan con grupos con intención real de consumo.",
      },
    ],
    coverImage: "/projects/datebox/1.png",
    gallery: [
      { url: "/projects/datebox/1.png", caption: "Identidad visual y propuesta de valor de DateBox" },
      { url: "/projects/datebox/2.png", caption: "Experiencia móvil para creación y coordinación de grupos" },
      { url: "/projects/datebox/3.png", caption: "Sincronización de disponibilidad horaria entre amigos" },
      { url: "/projects/datebox/4.png", caption: "Recomendaciones personalizadas de planes y locales con IA" },
      { url: "/projects/datebox/5.png", caption: "Exploración de comercios gastronómicos y eventos locales" },
      { url: "/projects/datebox/6.png", caption: "Álbum compartido de recuerdos y fotos de cada salida" },
      { url: "/projects/datebox/7.png", caption: "Modelo de conexión B2B para comercios y marcas locales" },
      { url: "/projects/datebox/8.png", caption: "Ecosistema completo DateBox: App Móvil + Portal de Comercios" },
    ],
    videoEmbed: "https://www.youtube.com/embed/Xh6E90fD3_k",
    techSummary: {
      frontend: "React Native + Expo (iOS/Android), NativeWind, React + Vite para Landing y Portal Admin B2B.",
      backend: "API Serverless de baja latencia con Hono sobre Cloudflare Workers + Agentes de IA en Python con LangGraph.",
      infraAndData: "Supabase (PostgreSQL, Auth, Storage, Realtime), Monorepo con Turborepo y CI/CD en GitHub Actions.",
    },
    tags: ["React Native", "Expo", "Cloudflare Workers", "Hono", "LangGraph (IA)", "Supabase", "TypeScript"],
    links: {
      live: "https://datebox.com.ar",
      liveLabel: "Ver Landing Oficial",
      secondaryLive: "https://admin.datebox.com.ar",
      secondaryLiveLabel: "Portal B2B Comercios",
      instagram: "https://www.instagram.com/datebox.app",
    },
    featured: true,
  },
  {
    slug: "dosel",
    title: "DOSEL",
    subtitle: "Verificación Satelital y Trazabilidad Blockchain de Créditos de Carbono",
    category: "ai-web3",
    categoryLabel: "IA, Satélites & Blockchain",
    badge: "🏆 1° Puesto Track Stellar · NEATECH 2026",
    period: "Octubre 2026",
    clientOrContext: "Ideatón NEA TECH 2026 (Museo de Arte Contemporáneo de Corrientes)",
    shortDescription:
      "Plataforma que lleva transparencia al mercado de bonos de carbono del bosque nativo: combina imágenes satelitales multiespectrales de Sentinel-2 con contratos inteligentes en Stellar (Soroban) para verificar desde el espacio que el monte siga en pie antes de emitir o transferir cualquier certificado.",
    challenge:
      "El mercado tradicional de créditos de carbono sufre de intermediación opaca, auditorías manuales costosas que demoran años y falta de pruebas continuas de que el bosque que respalda un bono no haya sido desmontado después de su emisión.",
    solution:
      "Desarrollamos DOSEL en 72 horas durante el Ideatón NEA TECH 2026, obteniendo el 1° Puesto en el Track de Stellar. Nuestro oráculo satelital consulta imágenes reales de la misión europea Sentinel-2 (10m de resolución) sobre predios del Gran Chaco, cruza el índice de vigor vegetal (NDVI) con mapas de cobertura de suelo y autoriza en blockchain la emisión de tokens GTON (1 GTON = 1 tCO2e) únicamente si el bosque sigue intacto. Si detecta desmonte, el contrato congela automáticamente el predio.",
    highlights: [
      { metric: "1° Puesto", label: "Ganadores del Track Stellar en Ideatón NEA TECH 2026" },
      { metric: "10 metros", label: "Resolución espacial con imágenes satelitales Sentinel-2 L2A" },
      { metric: "Freeze Auto", label: "Bloqueo automático on-chain ante caída de índice vegetal" },
      { metric: "100% Trazable", label: "Compra y retiro atómico con certificado verificable sin intermediarios" },
    ],
    features: [
      {
        title: "Oráculo Satelital de Doble Señal (Sentinel-2 + Cobertura)",
        description:
          "Procesa pasadas satelitales reales sobre polígonos GPS registrados (El Impenetrable, Parque Nacional Chaco, Taco Pozo) midiendo el vigor fotosintético del dosel forestal y descartando falsos positivos de cultivos estacionales.",
      },
      {
        title: "Congelamiento Automático ante Desmonte (Smart Contract Freeze)",
        description:
          "Si el índice NDVI de un lote cae por debajo del umbral de seguridad, el contrato inteligente bloquea de forma autónoma toda nueva emisión de créditos hasta que se realice una auditoría.",
      },
      {
        title: "Trazabilidad por Lote y Período",
        description:
          "A diferencia de los mercados donde los bonos se mezclan en un fondo anónimo, cada token conserva la identidad exacta del predio forestal y la evidencia satelital que le dio origen.",
      },
      {
        title: "Compra y Compensación Atómica (Buy & Retire)",
        description:
          "Las empresas que compensan su huella de carbono pagan al productor forestal y queman (retiran) los créditos en una sola transacción atómica, obteniendo un certificado público e irrepetible que impide la doble venta.",
      },
    ],
    coverImage: "/projects/dosel/app-portada.png",
    gallery: [
      { url: "/projects/dosel/app-portada.png", caption: "Plataforma web DOSEL: verificación satelital desde el espacio" },
      { url: "/projects/dosel/app-predios.png", caption: "Monitoreo de predios forestales del Gran Chaco e índice NDVI en vivo" },
      { url: "/projects/dosel/app-cobertura.png", caption: "Cruce de señal satelital Sentinel-2 contra mapa de cobertura de suelo" },
      { url: "/projects/dosel/sat-impen.png", caption: "Captura satelital real procesada sobre lote en El Impenetrable" },
      { url: "/projects/dosel/app-mercado.png", caption: "Mercado directo de lotes verificados sin intermediarios" },
      { url: "/projects/dosel/app-modal.png", caption: "Flujo de compra y retiro atómico (Buy & Retire) en Stellar Soroban" },
      { url: "/projects/dosel/certificado-pdf.png", caption: "Certificado de compensación de carbono con trazabilidad on-chain" },
    ],
    videoEmbed: "https://www.youtube.com/embed/Uxa_8bNBiZ4",
    techSummary: {
      frontend: "Aplicación web interactiva en React, TypeScript y Vite con integración de billetera Freighter y visualización geoespacial.",
      backend: "Oráculo satelital en Python (Planetary Computer STAC API, Sentinel-2 L2A, Rasterio, NumPy).",
      infraAndData: "Contratos inteligentes en Rust sobre Stellar (Soroban SDK) + réplica interoperable en Hedera (Solidity HSCS + HCS).",
    },
    tags: ["Stellar (Soroban)", "Rust", "Python", "Sentinel-2 Satélites", "React", "TypeScript", "Web3"],
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
    slug: "pollinode",
    title: "PolliNode",
    subtitle: "Sensores Solares con Visión Artificial y Bioacústica para Polinización Agrícola",
    category: "ai-web3",
    categoryLabel: "IoT, Edge AI & Agrotech",
    badge: "🥉 3° Puesto Innovación · Rally Latam 2026",
    period: "Octubre 2026",
    clientOrContext: "Rally Latinoamericano de Innovación 2026 (Sede UTN FRRe / INTECNOR)",
    shortDescription:
      "Solución agroecológica premiada tras 28 horas de innovación continua: combina estaciones solares inteligentes (visión artificial + bioacústica en el borde) con islas rotativas de flora nativa para detectar zonas muertas de polinización y regenerar suelos en cultivos orgánicos.",
    challenge:
      "Los cultivos agroecológicos dependientes de polinizadores en nuestra región (algodón orgánico, girasol, cucurbitáceas) sufren caídas de hasta un 40% en su rinde por la pérdida de nitrógeno del suelo y las 'zonas muertas de polinización' en el centro de los lotes, ya que los polinizadores nativos solo vuelan entre 150 y 300 metros desde el monte.",
    solution:
      "Diseñamos PolliNode junto a un sistema de Islas Biodinámicas Rotativas. Nodos solares autónomos de bajo costo ubicados en el lote escuchan el zumbido de vuelo (bioacústica) y observan mediante cámara macro e IA embebida (TinyML) la actividad de abejas nativas, abejorros y sírfidos sin requerir señal 4G rural (vía LoRaWAN). El sistema genera un mapa de calor del campo y le indica al productor exactamente en qué coordenadas sembrar islas de flora nativa y leguminosas fijadoras de nitrógeno.",
    highlights: [
      { metric: "3° Puesto", label: "Categoría Innovación en Rally Latinoamericano 2026 (UTN FRRe)" },
      { metric: "28 Horas", label: "Prototipado intensivo en simultáneo al fin de semana de NEATECH" },
      { metric: "Edge AI", label: "Clasificación por visión artificial y frecuencia de aleteo (Hz)" },
      { metric: "100% Autónomo", label: "Nodos solares con conectividad rural de largo alcance LoRaWAN" },
    ],
    features: [
      {
        title: "Monitoreo Dual: Bioacústica + Visión Artificial en el Borde",
        description:
          "Cada estación identifica especies polinizadoras por la frecuencia acústica de su aleteo (200–250 Hz en abejas, 120–160 Hz en abejorros Bombus, >300 Hz en sírfidos) combinada con detección visual mediante modelos ligeros de IA.",
      },
      {
        title: "Mapas de Calor y Detección de Zonas Muertas",
        description:
          "El software procesa las lecturas de los nodos del campo para visualizar dónde decae el radio de vuelo de los polinizadores y qué sectores del cultivo están quedando sin fecundación óptima.",
      },
      {
        title: "Planificación de Islas Biodinámicas Rotativas",
        description:
          "Recomienda al productor la ubicación exacta de corredores de vegetación nativa y leguminosas que actúan como puentes biológicos, refugio post-cosecha y fijadores naturales de nitrógeno para la campaña siguiente.",
      },
      {
        title: "Operación Rural Sin Dependencia de Internet Móvil",
        description:
          "Arquitectura pensada para la realidad productiva del norte argentino: alimentación por panel solar de 5W y transmisión por radiofrecuencia LoRaWAN hasta el casco de la chacra.",
      },
    ],
    coverImage: "/projects/pollinode/guia-pizarron.png",
    gallery: [
      {
        url: "/projects/pollinode/guia-pizarron.png",
        caption: "Arquitectura integral de PolliNode: Islas Biodinámicas Rotativas + Nodos Solares IoT + Mapa de Polinización",
      },
    ],
    videoEmbed: "https://www.youtube.com/embed/qxmAHWDdtBQ",
    techSummary: {
      frontend: "Tablero de visualización de mapas de calor de polinización y alertas directas para el productor agropecuario.",
      backend: "Inferencia en el borde con TinyML (espectrogramas de audio CNN + YOLO ligero) y algoritmos de triangulación espacial.",
      infraAndData: "Estaciones basadas en microcontroladores ESP32-S3, energía solar fotovoltaica y red inalámbrica LoRaWAN.",
    },
    tags: ["Edge AI (TinyML)", "Visión Artificial", "Bioacústica", "IoT / LoRaWAN", "Agrotech", "ESP32-S3"],
    links: {
      github: "https://github.com/Asymmetric-Devs/rally-innovacion-2026",
      linkedinPost:
        "https://www.linkedin.com/posts/sixto-arrejin_rallylatam2026-utnfrre-pollinode-activity-7519412922008150017-VkdQ/",
      pressUrl: "https://www.frre.utn.edu.ar/noticias/utn-frre-reconocio-a-estudiantes-destacados-en-el/",
    },
    featured: true,
  },
  {
    slug: "chess-study",
    title: "Chess Study",
    subtitle: "Estudio de Ajedrez en Pantalla Dividida con Lector PDF y Escáner IA Local",
    category: "web",
    categoryLabel: "Web App & IA en Navegador",
    badge: "Web App · IA 100% Local",
    period: "Mayo 2026",
    clientOrContext: "Producto Web Open Source (Asymmetric Lab)",
    shortDescription:
      "Aplicación web de alto rendimiento que unifica en una sola pantalla dividida un lector de libros digitales de ajedrez (PDF a 60 FPS) con un tablero de análisis interactivo y un escáner con Inteligencia Artificial que digitaliza cualquier diagrama impreso con un clic.",
    challenge:
      "Quienes estudian ajedrez con libros en PDF sufren una fricción constante: alternar entre la ventana del libro y otra aplicación de tablero, y perder minutos armando manualmente pieza por pieza cada diagrama del libro para poder analizar las variantes.",
    solution:
      "Construimos una Single-Page Application (SPA) ultrarrápida con pantalla dividida redimensionable. A la izquierda, el usuario lee libros de más de 300 páginas con fluidez total y persistencia offline; a la derecha, analiza jugadas en un tablero interactivo. Lo más disruptivo: al hacer un solo clic sobre cualquier diagrama del PDF, una red neuronal que corre 100% en el navegador reconoce las piezas y carga la posición instantáneamente en el tablero.",
    highlights: [
      { metric: "1 Clic", label: "Escaneo automático de diagramas del PDF al tablero con IA" },
      { metric: "60 FPS", label: "Lectura fluida de libros pesados mediante Web Workers" },
      { metric: "100% Offline", label: "Guarda tus libros y la última página leída en el navegador" },
      { metric: "5 Temas", label: "Personalización visual completa + Modo Claro/Oscuro" },
    ],
    features: [
      {
        title: "Escáner de Diagramas con IA en el Navegador (OCR de Ajedrez)",
        description:
          "Haciendo clic sobre cualquier diagrama impreso en el PDF (o pegando una captura de pantalla), una red neuronal convolucional detecta la grilla y las 64 casillas en milisegundos sin enviar datos a ningún servidor externo.",
      },
      {
        title: "Pantalla Dividida Fluida y Adaptable (Split-Screen)",
        description:
          "Divisor arrastrable para ajustar el tamaño del libro y del tablero en escritorio, con inversión de paneles, rotación de perspectiva y adaptación automática en dispositivos móviles.",
      },
      {
        title: "Tablero Inteligente Dual: Modo Análisis y Editor Libre",
        description:
          "Permite alternar entre un editor libre (arrastrar piezas para armar posiciones) y un modo de análisis con validación estricta de jugadas legales e historial navegable en notación algebraica.",
      },
      {
        title: "Biblioteca Clásica Integrada y Memoria Automática",
        description:
          "Incluye los 4 tomos del clásico 'Tratado General de Ajedrez' de Roberto Grau listos para abrir con un clic, y almacena cualquier PDF propio localmente recordando siempre la página exacta donde dejaste de leer.",
      },
    ],
    coverImage: "/projects/chess-study/1-modo-claro-esmeralda.png",
    gallery: [
      {
        url: "/projects/chess-study/1-modo-claro-esmeralda.png",
        caption: "Vista principal en pantalla dividida: lectura del libro PDF + tablero interactivo (Modo Claro Esmeralda)",
      },
      {
        url: "/projects/chess-study/2-modo-oscuro-oceano.png",
        caption: "Estudio nocturno sin fatiga visual con el tema Oscuro Océano e historial de jugadas",
      },
      {
        url: "/projects/chess-study/3-configuracion-claro.png",
        caption: "Panel de personalización de temas de tablero, orientación y modo de edición libre",
      },
      {
        url: "/projects/chess-study/4-configuracion-oscuro.png",
        caption: "Biblioteca integrada y controles de persistencia local en modo oscuro",
      },
    ],
    videoEmbed: "https://www.youtube.com/embed/o91drm59cmY",
    techSummary: {
      frontend: "React 19, Vite, Tailwind CSS v4 y componentes de tablero reactivos con múltiples paletas temáticas.",
      backend: "Inferencia de visión artificial 100% client-side con ONNX Runtime Web (WebAssembly) y motor de reglas chess.js.",
      infraAndData: "Renderizado PDF aislado en Web Workers (Mozilla PDF.js) y persistencia offline en IndexedDB + Service Workers.",
    },
    tags: ["React 19", "ONNX WebAssembly (IA)", "PDF.js", "chess.js", "IndexedDB", "Tailwind CSS"],
    links: {
      live: "https://chess-study.asymmetric.com.ar",
      liveLabel: "Abrir Aplicación Web",
      secondaryLive: "https://my-chess-study.vercel.app/",
      secondaryLiveLabel: "Mirror en Vercel",
      github: "https://github.com/SixtoArrejin/chess-study",
    },
    featured: true,
  },
  {
    slug: "elepad",
    title: "Elepad",
    subtitle: "Plataforma Móvil Accesible, Estimulación Cognitiva & Álbumes con IA",
    category: "mobile",
    categoryLabel: "App Móvil & Salud Digital",
    badge: "Google Play · 🥉 3° Puesto Rally Latam 2024",
    period: "2025 — 2026",
    clientOrContext: "Proyecto Final de Ingeniería & Google Play Store",
    shortDescription:
      "Aplicación móvil multiplataforma publicada en Google Play que conecta a adultos mayores con sus familias mediante una interfaz ultra accesible, juegos de estimulación cognitiva y un generador de álbumes narrativos asistido por Inteligencia Artificial.",
    challenge:
      "Las aplicaciones sociales tradicionales están sobrecargadas de menús pequeños y flujos complejos que excluyen a los adultos mayores, aumentando su aislamiento digital y dificultando el seguimiento cotidiano de su bienestar cognitivo y emocional por parte de su familia.",
    solution:
      "Desarrollada por los miembros fundadores de Asymmetric (inicialmente premiada con el 3° puesto en el Rally Latinoamericano de Innovación 2024 y luego llevada a producción como Proyecto Final de Ingeniería en Sistemas), Elepad ofrece una experiencia adaptada con alto contraste, juegos diarios de memoria y lógica, rachas de actividad familiar y un módulo impulsado por Google Gemini que transforma fotos y anécdotas en álbumes narrativos familiares.",
    highlights: [
      { metric: "Google Play", label: "Aplicación publicada y disponible en tienda oficial" },
      { metric: "3° Puesto", label: "Premiada en Rally Latinoamericano de Innovación 2024" },
      { metric: "IA Generativa", label: "Síntesis de recuerdos y álbumes familiares con Google Gemini" },
      { metric: "7 Releases", label: "Ciclo completo de ingeniería bajo metodología ágil Scrum" },
    ],
    features: [
      {
        title: "Interfaz Accesible Pensada para el Adulto Mayor",
        description:
          "Tipografía clara, botones de gran tamaño, navegación sin laberintos y retroalimentación visual inmediata para que cualquier persona mayor pueda usarla con autonomía.",
      },
      {
        title: "Entrenamiento Cognitivo Diario y Seguimiento Familiar",
        description:
          "Incluye minijuegos diseñados para ejercitar la memoria, atención y lógica (Memoria, Sudoku, Lights Out) con sistema de rachas y estadísticas compartidas con el grupo familiar.",
      },
      {
        title: "El Álbum: Síntesis de Recuerdos con Inteligencia Artificial",
        description:
          "Integra Google Gemini para ayudar a las familias y adultos mayores a redactar, organizar y preservar historias de vida y fotografías en álbumes narrativos interactivos.",
      },
      {
        title: "Arquitectura Cloud Serverless de Alta Disponibilidad",
        description:
          "Sincronización en tiempo real entre los teléfonos de los familiares y el adulto mayor, con notificaciones push, autenticación con Google en un toque y respaldo seguro en la nube.",
      },
    ],
    coverImage: "/projects/elepad/1.jpg",
    gallery: [
      { url: "/projects/elepad/1.jpg", caption: "Presentación general de la experiencia móvil de Elepad" },
      { url: "/projects/elepad/2.jpg", caption: "Pantalla de inicio accesible y conexión con el grupo familiar" },
      { url: "/projects/elepad/3.jpg", caption: "Módulo de estimulación cognitiva y juegos diarios" },
      { url: "/projects/elepad/4.jpg", caption: "El Álbum: recuerdos familiares asistidos por Inteligencia Artificial" },
      { url: "/projects/elepad/5.jpg", caption: "Seguimiento de rachas y actividad compartida" },
      { url: "/projects/elepad/system-architecture.png", caption: "Arquitectura cloud serverless con Cloudflare Workers, Hono y Supabase" },
    ],
    techSummary: {
      frontend: "Aplicación móvil multiplataforma en React Native, Expo y TypeScript.",
      backend: "API Serverless stateless con Hono sobre Cloudflare Workers, validada con OpenAPI + IA con Google Gemini.",
      infraAndData: "Supabase (PostgreSQL, Google OAuth, Storage, Realtime), Monorepo en Turborepo y deploys con Expo EAS.",
    },
    tags: ["React Native", "Expo", "Google Gemini (IA)", "Cloudflare Workers", "Supabase", "Google Play"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.elepadorg.elepad",
      github: "https://github.com/elepad-org/Elepad",
    },
    featured: true,
  },
];

export const milestonesData: MilestoneItem[] = [
  {
    id: "neatech-2026-stellar",
    date: "Octubre 2026",
    type: "premio",
    typeLabel: "🏆 1° Puesto · Hackathon & Web3",
    title: "1° Puesto en el Track de Stellar — Ideatón NEA TECH 2026",
    subtitle: "Proyecto DOSEL · Museo de Arte Contemporáneo de Corrientes (MACC)",
    description:
      "Tras tres días intensos de desarrollo en Corrientes, el equipo completo de Asymmetric obtuvo el primer lugar en la vertical de Stellar con DOSEL: un sistema que combina imágenes satelitales de Sentinel-2 con contratos inteligentes en Soroban para auditar desde el espacio los bosques nativos del Gran Chaco antes de emitir créditos de carbono.",
    location: "Corrientes, Argentina",
    image: "/projects/dosel/app-portada.png",
    relatedProjectSlug: "dosel",
    links: [
      {
        label: "Ver publicación en LinkedIn",
        url: "https://www.linkedin.com/posts/sixto-arrejin_ideathon-neatech-stellar-ugcPost-7518038677902589952-W6t7/",
        external: true,
      },
      {
        label: "Ver caso de estudio DOSEL",
        url: "/proyectos/dosel",
        external: false,
      },
      {
        label: "Probar Demo en vivo",
        url: "https://ideathon-henna.vercel.app/",
        external: true,
      },
    ],
  },
  {
    id: "radio-neatech-2026",
    date: "Octubre 2026",
    type: "prensa",
    typeLabel: "🎙️ Prensa & Difusión Radial",
    title: "Entrevista en Radio tras consagrarnos ganadores en NEA TECH 2026",
    subtitle: "Difusión regional sobre innovación tecnológica, satélites y blockchain en el NEA",
    description:
      "Fuimos invitados a conversar en vivo en radio sobre cómo desde el nordeste argentino desarrollamos tecnología satelital y contratos inteligentes para proteger el monte nativo, el detrás de escena de un fin de semana donde competimos en dos hackathones en simultáneo y la visión de Asymmetric Devs para llevar ingeniería de software de primer nivel a empresas de la región.",
    location: "Corrientes / Chaco, Argentina",
    relatedProjectSlug: "dosel",
    links: [
      {
        label: "Conocer el proyecto ganador (DOSEL)",
        url: "/proyectos/dosel",
        external: false,
      },
      {
        label: "Cobertura NEA TECH en El Litoral",
        url: "https://www.ellitoral.com.ar/sociedad/2026-10-18-15-53-0-corrientes-reunio-a-empresas-y-emprendedores-en-la-primera-edicion-de-nea-tech",
        external: true,
      },
    ],
  },
  {
    id: "rally-latam-2026",
    date: "Octubre 2026",
    type: "premio",
    typeLabel: "🥉 3° Puesto · Innovación",
    title: "Podio en el Rally Latinoamericano de Innovación 2026 (Categoría Innovación)",
    subtitle: "Proyecto PolliNode · Sede UTN Facultad Regional Resistencia / Fundación INTECNOR",
    description:
      "En el mismo fin de semana del NEA TECH, participamos en paralelo durante 28 horas corridas en el Rally Latinoamericano de Innovación. Obtuvimos el 3° puesto en la categoría Innovación de nuestra sede con PolliNode: estaciones solares inteligentes con visión artificial y bioacústica para proteger polinizadores nativos y guiar la rotación de suelos.",
    location: "Resistencia, Chaco",
    image: "/projects/pollinode/guia-pizarron.png",
    relatedProjectSlug: "pollinode",
    links: [
      {
        label: "Ver publicación en LinkedIn",
        url: "https://www.linkedin.com/posts/sixto-arrejin_rallylatam2026-utnfrre-pollinode-activity-7519412922008150017-VkdQ/",
        external: true,
      },
      {
        label: "Nota oficial UTN-FRRe",
        url: "https://www.frre.utn.edu.ar/noticias/utn-frre-reconocio-a-estudiantes-destacados-en-el/",
        external: true,
      },
      {
        label: "Ver caso de estudio PolliNode",
        url: "/proyectos/pollinode",
        external: false,
      },
    ],
  },
  {
    id: "rally-latam-2024-elepad",
    date: "2024 — 2026",
    type: "lanzamiento",
    typeLabel: "🚀 De Hackathon a Google Play",
    title: "De ganar el Rally de Innovación 2024 a publicar Elepad en Google Play Store",
    subtitle: "3° Puesto en Impacto Social (UTN-FRRe) y graduación como Ingenieros en Sistemas",
    description:
      "Nuestro recorrido como equipo comenzó ganando el 3° lugar en Impacto Social en el Rally Latinoamericano 2024 con Elepad. Lejos de dejarlo como un prototipo, lo convertimos en nuestro Proyecto Final de Ingeniería en Sistemas y lo publicamos en Google Play Store con soporte de IA generativa para adultos mayores y sus familias.",
    location: "Resistencia / Corrientes",
    image: "/projects/elepad/1.jpg",
    relatedProjectSlug: "elepad",
    links: [
      {
        label: "Ver caso de estudio Elepad",
        url: "/proyectos/elepad",
        external: false,
      },
      {
        label: "Ver en Google Play Store",
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
    specialtyTag: "Web, Mobile & Cloud Architecture",
    photo: "/team/sixto-arrejin.jpg",
    bio: "Especializado en arquitectura de productos web y móviles de punta a punta con React, Next.js, React Native y Node.js. Ha liderado el desarrollo y puesta en producción de plataformas comerciales (DÚO Propiedades), sistemas institucionales (SCyT UTN) y aplicaciones publicadas en tiendas.",
    skills: ["Next.js", "React Native", "TypeScript", "Node.js", "Supabase", "Docker & CI/CD"],
    linkedin: "https://www.linkedin.com/in/sixto-arrejin/",
    github: "https://github.com/SixtoArrejin",
    portfolio: "https://sixto-arrejin.asymmetric.com.ar",
  },
  {
    name: "Aldo Omar Andres",
    shortName: "Aldo Andres",
    role: "Ingeniero en Sistemas · Full Stack & Mobile Specialist",
    specialtyTag: "Mobile, DevSecOps & Producto",
    photo: "/team/aldo-andres.jpg",
    bio: "Ingeniero enfocado en el desarrollo de aplicaciones móviles multiplataforma, arquitecturas escalables y seguridad en el ciclo de vida del software (DevSecOps). Combina diseño centrado en la experiencia de usuario con integraciones de IA y visión artificial.",
    skills: ["React Native", "Expo", "TypeScript", "Python", "DevSecOps", "Cloudflare Workers"],
    linkedin: "https://www.linkedin.com/in/aldo-omar-andres-a0b54b218/",
    github: "https://github.com/AldoOmarAndres",
  },
  {
    name: "André Leandro San Lorenzo",
    shortName: "André San Lorenzo",
    role: "Ingeniero en Sistemas · Especialista en Datos, IA & Web3",
    specialtyTag: "AI Agents, Data Science & Smart Contracts",
    photo: "/team/andre-san-lorenzo.jpg",
    bio: "Especialista en Ciencia de Datos, Inteligencia Artificial Generativa (Agentes con LangGraph/LLMs) y arquitecturas distribuidas. Diseña motores de recomendación, oráculos satelitales y contratos inteligentes orientados a resolver problemas de negocio complejos.",
    skills: ["Python", "LangGraph & GenAI", "Data Science", "FastAPI", "Smart Contracts", "Kubernetes"],
    linkedin: "https://www.linkedin.com/in/andre-leandro-san-lorenzo/",
    github: "https://github.com/Andre-Leandro",
  },
  {
    name: "Tobias Alejandro Maciel Meister",
    shortName: "Tobías Maciel Meister",
    role: "Ingeniero en Sistemas · Full Stack, IA & DevOps",
    specialtyTag: "Automatización IA, Full Stack & Cloud",
    photo: "/team/tobias-maciel.jpg",
    bio: "Desarrollador Full Stack e ingeniero de automatización con IA (agentes conversacionales para WhatsApp/CRM, facturación electrónica ARCA y sistemas empresariales). Distinguido en el Programa AWS Desarrolla y en múltiples competencias de innovación.",
    skills: ["React & Next.js", "Python & Node.js", "Agentes IA / MCP", "AWS & Docker", "CI/CD", "PostgreSQL"],
    linkedin: "https://www.linkedin.com/in/tobias-alejandro-maciel-meister-41ba39218/",
    github: "https://github.com/TobiasMaciel",
    portfolio: "https://tobiasmaciel.github.io/Portfolio/",
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return projectsData.find((p) => p.slug === slug);
}
