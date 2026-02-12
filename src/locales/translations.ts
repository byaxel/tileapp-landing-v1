export const translations: Record<
  "es" | "en",
  {
    nav: {
      features: string;
      subscription: string;
      dashboard: string;
    };
    hero: {
      title: string;
      subtitle: { text: string; highlight?: boolean }[];
    };
    features: {
      main: {
        label: string;
        items: { title: string; description: string; icon: string }[];
      };
      secondary: {
        label: string;
        items: { title: string; description: string; icon: string }[];
      };
    };
    subscription: {
      label: string;
      title1: string;
      title2: string;
      title3: string;
      description: { text: string; highlight?: boolean }[];
      footer: string;
    };
    dashboard: {
      label: string;
      title1_1: string;
      title1_2: string;
      description: { text: string; highlight?: boolean }[];
      title2_1: string;
      title2_2: string;
    };
    footer: {
      copyrightApp: string;
      copyrightRights: string;
      policy: string;
      support: string;
    };
    privacy: {
      title: string;
      subtitle: string;
      content: string;
    };
  }
> = {
  es: {
    nav: {
      features: "Features",
      subscription: "Suscripciones",
      dashboard: "Dashboard",
    },
    hero: {
      title: "Control total",
      subtitle: [
        { text: "Tus suscripciones, " },
        { text: "ordenadas", highlight: true },
        { text: ". Tus gastos, " },
        { text: "claros", highlight: true },
        { text: ". Todo en una sola app." },
      ],
    },
    features: {
      main: {
        label: "Features",
        items: [
          {
            title: "Suscripciones",
            description:
              "Registra tus suscripciones y controla los periodos de cobro.",
            icon: "creditcard",
          },
          {
            title: "Acceso seguro",
            description:
              "Accede de forma segura con autenticación biométrica.",
            icon: "faceid",
          },
          {
            title: "Modo offline",
            description:
              "Usa la app en cualquier momento, incluso sin conexión.",
            icon: "wifislash",
          },
          {
            title: "iCloud",
            description:
              "Sincroniza tus datos automáticamente en todos tus dispositivos.",
            icon: "icloud",
          },
        ],
      },
      secondary: {
        label: "More features",
        items: [
          {
            title: "Notificaciones",
            description:
              "Recibe alertas antes de que se renueve cualquier suscripción.",
            icon: "bell",
          },
          {
            title: "Seguimiento",
            description:
              "Visualiza tus gastos mensuales y anuales con gráficos.",
            icon: "barchart",
          },
          {
            title: "Personalización",
            description:
              "Cambia el color, oculta elementos y adapta el dashboard como quieras.",
            icon: "drop",
          },
          {
            title: "Organización",
            description:
              "Crea tus categorías, agrupa y ordena las suscripciones fácilmente.",
            icon: "rectangles",
          },
        ],
      },
    },
    subscription: {
      label: "Suscripciones",
      title1: "Libertad",
      title2: "total",
      title3: ".",
      description: [
        { text: "Ten todas tus suscripciones en " },
        { text: "un solo lugar", highlight: true },
        { text: ", recibe " },
        { text: "avisos antes de pagar", highlight: true },
        { text: ", ajusta tus planes y añade las que tú quieras, " },
        { text: "rápido y fácil", highlight: true },
        { text: "." },
      ],
      footer: "180+ suscripciones top en un solo toque.",
    },
    dashboard: {
      label: "Dashboard",
      title1_1: "Sencilla. Clara. ",
      title1_2: "Precisa.",
      description: [
        { text: "Control total y " },
        { text: "claridad", highlight: true },
        { text: " sobre tus suscripciones " },
        { text: "de un vistazo", highlight: true },
        { text: ". Un dashboard diseñado para concentrarte en lo que realmente importa: ver tus gastos " },
        { text: "sin ruido ni desorden", highlight: true },
        { text: "." },
      ],
      title2_1: "Control total. ",
      title2_2: "De verdad.",
    },
    footer: {
      copyrightApp: "TileApp",
      copyrightRights: "Todos los derechos reservados.",
      policy: "Política de Privacidad",
      support: "Email de soporte",
    },
    privacy: {
      title: "Política de Privacidad",
      subtitle:
        "Esta Política de Privacidad explica cómo Tile App maneja tus datos y tus derechos.",
      content: `1. Recopilación de datos
Tile App NO recopila, almacena ni transmite datos personales directamente. Tus datos se almacenan localmente en tu dispositivo.

2. Sincronización con iCloud
Si eliges activar la sincronización con iCloud, los datos de la app se respaldarán y sincronizarán a través del servicio iCloud de Apple. Ten en cuenta que iCloud es un servicio externo sujeto a las políticas de privacidad de Apple. Tile App no tiene acceso a tus datos en iCloud y no se hace responsable de cualquier dato almacenado o perdido a través de iCloud.

3. Notificaciones y alertas
Tile App proporciona recordatorios y notificaciones basados en los datos que introduces. Sin embargo, NO garantizamos la exactitud ni la puntualidad de estas alertas. Es tu responsabilidad verificar toda la información y gestionar tus suscripciones.

4. Seguridad de los datos
Tus datos se almacenan localmente y están protegidos por las medidas de seguridad de tu dispositivo. Tile App no transmite tus datos a terceros.

5. Tus derechos
Tienes derecho a acceder, modificar y eliminar tus datos almacenados en tu dispositivo y en iCloud.

6. Cambios en esta política
Podemos actualizar esta Política de Privacidad ocasionalmente. Por favor, revísala periódicamente.

7. Contacto
Si tienes preguntas o dudas sobre esta política, contáctanos en tileapp@byaxel.dev.

Al usar Tile App, aceptas esta Política de Privacidad.`,
    },
  },
  en: {
    nav: {
      features: "Features",
      subscription: "Subscriptions",
      dashboard: "Dashboard",
    },
    hero: {
      title: "Take control",
      subtitle: [
        { text: "Your subscriptions, " },
        { text: "organized", highlight: true },
        { text: ". Your spending, " },
        { text: "clear", highlight: true },
        { text: ". All in one app." },
      ],
    },
    features: {
      main: {
        label: "Features",
        items: [
          {
            title: "Subscriptions",
            description:
              "Register your subscriptions and control billing periods.",
            icon: "creditcard",
          },
          {
            title: "Secure Access",
            description:
              "Secure access with biometric authentication.",
            icon: "faceid",
          },
          {
            title: "Offline Mode",
            description:
              "Use the app anytime, even without an internet connection.",
            icon: "wifislash",
          },
          {
            title: "iCloud",
            description:
              "Sync your data automatically across all your devices.",
            icon: "icloud",
          },
        ],
      },
      secondary: {
        label: "More features",
        items: [
          {
            title: "Notifications",
            description:
              "Get notified before any subscription renews.",
            icon: "bell",
          },
          {
            title: "Follow-up",
            description:
              "Visualize your spending monthly and yearly with charts.",
            icon: "barchart",
          },
          {
            title: "Personalization",
            description:
              "Change the color, hide tiles, and shape your dashboard as you like.",
            icon: "drop",
          },
          {
            title: "Organization",
            description:
              "Create your own categories, group and sort your subscriptions easily.",
            icon: "rectangles",
          },
        ],
      },
    },
    subscription: {
      label: "Subscriptions",
      title1: "Total",
      title2: "choice",
      title3: ".",
      description: [
        { text: "Keep all your subscriptions " },
        { text: "together", highlight: true },
        { text: ", get " },
        { text: "reminders before payments", highlight: true },
        { text: ", tweak your plans, and add whatever you want — " },
        { text: "easy and quick", highlight: true },
        { text: "." },
      ],
      footer: "180+ top subscriptions at your fingertips.",
    },
    dashboard: {
      label: "Dashboard",
      title1_1: "Minimal. Clear. ",
      title1_2: "Precise.",
      description: [
        { text: "Full control and " },
        { text: "clarity", highlight: true },
        { text: " over your subscriptions " },
        { text: "at a glance", highlight: true },
        { text: ". A dashboard crafted to help you focus on what truly matters: see your spending " },
        { text: "without noise or clutter", highlight: true },
        { text: "." },
      ],
      title2_1: "Full control. ",
      title2_2: "For real.",
    },
    footer: {
      copyrightApp: "TileApp",
      copyrightRights: "All Rights Reserved.",
      policy: "Privacy Policy",
      support: "Email Support",
    },
    privacy: {
      title: "Privacy Policy",
      subtitle:
        "This Privacy Policy explains how Tile App handles your data and your rights.",
      content: `1. Data Collection
Tile App does NOT collect, store, or transmit any personal data directly. Your data is stored locally on your device.

2. iCloud Synchronization
If you choose to enable iCloud synchronization, your app data will be backed up and synced via Apple's iCloud service. Please note that iCloud is an external service subject to Apple's privacy policies. Tile App has no access to your iCloud data and is not responsible for any data stored or lost through iCloud.

3. Notifications and Alerts
Tile App provides reminders and notifications based on the data you enter. However, we do NOT guarantee the accuracy or timeliness of these alerts. It is your responsibility to verify all information and manage your subscriptions.

4. Data Security
Your data is stored locally and secured by your device's security measures. Tile App does not transmit your data to any third party.

5. Your Rights
You have the right to access, modify, and delete your data stored on your device and in iCloud.

6. Changes to this Policy
We may update this Privacy Policy from time to time. Please review it periodically.

7. Contact
If you have questions or concerns about this policy, please contact us at tileapp@byaxel.dev.

By using Tile App, you agree to this Privacy Policy.`,
    },
  },
};
