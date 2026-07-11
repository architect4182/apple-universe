import { ProductSpec, FeatureItem, Testimonial, PricingTier, FaqItem } from '../types';

export const HERO_MODES = [
  {
    id: 'studio',
    label: 'Studio Viewpoint',
    description: 'Minimalist obsidian workstation engineered for deep focus and zero fan noise during complex viewport rendering.',
    badge: 'Pro Display XDR 2 + MacBook Pro Space Black'
  },
  {
    id: 'promotion',
    label: '120Hz ProMotion Engine',
    description: 'True variable refresh rate from 1Hz up to 120Hz. Experience instant keyframe scrubbing with zero ghosting or tearing.',
    badge: 'Real-Time Hardware Ray Tracing'
  },
  {
    id: 'keyframe',
    label: '3D Fluid & Keyframe Inspection',
    description: 'AI-assisted Bezier interpolation curves and volumetric particle emitters powered by 16-core M4 Max Neural Engine.',
    badge: '100% DCI-P3 & Quantum OLED Precision'
  }
];

export const PRODUCTS: ProductSpec[] = [
  {
    id: 'macbook-pro-m4-max',
    name: 'MacBook Pro 16" with M4 Max',
    tagline: 'Mind-bending velocity. Space Black finish.',
    category: 'MacBook Pro',
    image: '/images/promotion-studio-hero.jpg',
    badge: 'New M4 Max Architecture',
    description: 'The ultimate powerhouse for motion designers and 3D generalists. Featuring up to 40 GPU cores with hardware-accelerated mesh shading and ray tracing, plus up to 128GB unified memory for massive fluid physics timelines without proxy files.',
    keySpecs: [
      { label: 'Unified Memory', value: 'Up to 128GB (546 GB/s bandwidth)' },
      { label: 'GPU Core Architecture', value: '40-Core with Hardware Ray Tracing' },
      { label: 'Display Refresh', value: 'Liquid Retina XDR with 120Hz ProMotion' },
      { label: 'Render Velocity', value: '4.8x faster than M1 Max in Cinema 4D' }
    ],
    highlights: [
      'Render 8K ProRes RAW and complex 3D particle systems simultaneously',
      'True Space Black anodized seal that dramatically reduces fingerprints',
      'Up to 24 hours of battery life—render on set or on long international flights',
      'SDXC card slot, HDMI 2.1 (supports 8K/60Hz or 4K/240Hz), 3x Thunderbolt 5'
    ],
    startingPrice: 3499
  },
  {
    id: 'pro-display-xdr-2',
    name: 'Pro Display XDR 2 (Quantum OLED ProMotion)',
    tagline: '6K resolution meets 120Hz ultra-fluid ProMotion.',
    category: 'Display',
    image: 'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    badge: 'World First 120Hz 6K Studio Display',
    description: 'Designed exclusively for visual artists who refuse to compromise between pixel density and high refresh rate motion. Featuring Quantum OLED micro-lens technology with 1,600 nits peak HDR brightness and 100% DCI-P3 color calibration directly from the factory.',
    keySpecs: [
      { label: 'Resolution & Size', value: '32-inch 6016 x 3384 (218 PPI)' },
      { label: 'Motion Fluidity', value: 'Adaptive 1Hz – 120Hz ProMotion' },
      { label: 'HDR Peak Brightness', value: '1,600 nits (1,000 nits sustained)' },
      { label: 'Color Gamut', value: 'True 10-bit, 1.07 Billion Colors' }
    ],
    highlights: [
      'Nano-texture glass option scatters light for zero glare in bright studios',
      'Pro Stand with precision counterbalancing and instant vertical rotation',
      'Custom Reference Modes for DCI-P3, Rec. 2020, NTSC, and HDR Video',
      'Single Thunderbolt 5 cable powers MacBook Pro with 140W fast charge'
    ],
    startingPrice: 4999
  },
  {
    id: 'motion-pro-suite',
    name: 'Apple Motion & Final Cut Pro X 6 Studio Suite',
    tagline: 'AI-assisted particle physics and dynamic typography.',
    category: 'Software',
    image: 'https://images.pexels.com/photos/29128147/pexels-photo-29128147.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    badge: 'Native Metal 3 & Neural Engine Optimization',
    description: 'Turn imagination into fluid motion graphics in milliseconds. Real-time 3D object tracking, volumetric smoke and neon shaders, and intelligent Bezier curve auto-smoothing that adapts to audio beats with zero latency.',
    keySpecs: [
      { label: 'Viewport Performance', value: 'Solid 120 FPS Real-time Playback' },
      { label: 'AI Keyframe Assist', value: 'Neural Engine Motion Interpolation' },
      { label: '3D Formats', value: 'Native USDZ, Alembic & OBJ Import' },
      { label: 'Plugin Ecosystem', value: 'Deep integration with After Effects & C4D' }
    ],
    highlights: [
      'Magnetic Timeline with sub-frame audio precision for exact motion beats',
      'Live chromatic dispersion and glassmorphic shader nodes built directly in',
      'One-click object segmentation and rotoscoping powered by M4 AI',
      'Export directly to spatial video and Apple Vision Pro format'
    ],
    startingPrice: 299
  },
  {
    id: 'ipad-pro-m4-pencil',
    name: 'iPad Pro M4 & Apple Pencil Pro',
    tagline: 'Direct tactile control over your vector curves.',
    category: 'iPad Pro',
    image: 'https://images.pexels.com/photos/35697247/pexels-photo-35697247.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    badge: 'Ultra Retina XDR Tandem OLED',
    description: 'The thinnest Apple product ever created, packed with the desktop-grade M4 chip. Use Apple Pencil Pro to barrel-roll brushes, squeeze for instant tool palettes, and feel crisp haptics as you snap keyframe nodes into alignment on Sidecar.',
    keySpecs: [
      { label: 'Display Panel', value: 'Tandem OLED with 120Hz ProMotion' },
      { label: 'Tactile Feedback', value: 'Custom Haptic Engine inside Pencil Pro' },
      { label: 'Sidecar Latency', value: 'Sub-3ms wireless display mirror to Mac' },
      { label: 'Weight & Thickness', value: '5.1mm ultra-thin titanium chassis' }
    ],
    highlights: [
      'Hover over the glass to preview 3D tool orientation and rotation angle before touching',
      'Use as a secondary 120Hz reference touch monitor with your MacBook Pro M4 Max',
      'Full desktop-class Adobe Substance 3D and Procreate Dreams native support',
      'All-day battery with fast inductive charging for continuous studio sessions'
    ],
    startingPrice: 999
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'ray-tracing',
    title: 'Hardware-Accelerated Ray Tracing',
    subtitle: 'Real-time reflections without the render queue.',
    description: 'The M4 Max GPU introduces second-generation hardware ray tracing. Complex glass refractions, caustic highlights, and soft area shadows now render directly in your viewport at an astonishing 120 frames per second.',
    iconName: 'Sparkles',
    metric: '4.8x',
    metricLabel: 'Faster viewport ray tracing than M1 Max',
    badge: 'Metal 3 Engine'
  },
  {
    id: 'unified-memory',
    title: '128GB Unified Architecture',
    subtitle: 'Say goodbye to "Out of VRAM" errors forever.',
    description: 'Unlike traditional PCs where RAM and VRAM are bottlenecked across PCIe slots, M4 Max shares up to 128GB of ultra-high-bandwidth memory (546 GB/s) directly across CPU and GPU. Load multi-million polygon scenes with uncompressed 8K textures effortlessly.',
    iconName: 'Cpu',
    metric: '546 GB/s',
    metricLabel: 'Unified memory bandwidth throughput',
    badge: 'Pro Memory'
  },
  {
    id: 'promotion-fluidity',
    title: 'True 120Hz Variable ProMotion',
    subtitle: 'Every keyframe, crisp as razor glass.',
    description: 'When animating high-speed typography or dynamic particle simulations, 60Hz causes motion blur that hides flaws. At 120Hz ProMotion, every interpolation frame is revealed with crystal precision, allowing you to craft world-class ease curves.',
    iconName: 'Activity',
    metric: '120 Hz',
    metricLabel: 'Silky smooth motion & zero tearing',
    badge: 'Adaptive Refresh'
  },
  {
    id: 'neural-interpolation',
    title: 'M4 Neural Engine Keyframe Assistant',
    subtitle: 'AI-driven optical flow and curve smoothing.',
    description: 'Let our 16-core Neural Engine analyze your motion vectors. It automatically suggests organic ease-in/ease-out Bezier tangents, generates intermediate optical flow frames, and removes unwanted jitter from hand-captured motion data.',
    iconName: 'Wand2',
    metric: '38 TOPS',
    metricLabel: 'Dedicated AI machine learning speed',
    badge: 'Smart Motion'
  },
  {
    id: 'color-precision',
    title: 'Quantum OLED & DCI-P3 Perfection',
    subtitle: 'What you design is what the world sees.',
    description: 'Never guess if your neon violet or electric cyan will clip on client screens. Every display in our Pro ecosystem is factory calibrated with spectrometer precision, guaranteeing 100% DCI-P3 coverage and true 1,000,000:1 contrast.',
    iconName: 'Palette',
    metric: '1.07B',
    metricLabel: 'Simultaneous 10-bit true colors displayed',
    badge: 'True Tone Pro'
  },
  {
    id: 'whisper-quiet',
    title: 'Thermal Architecture for Quiet Studios',
    subtitle: 'Heavy 3D particle sims. Zero jet engine noise.',
    description: 'Even under sustained 100% GPU loads rendering fluid simulations in Blender or Cinema 4D, our advanced thermal management keeps the MacBook Pro M4 Max virtually silent, keeping your creative environment calm and focused.',
    iconName: 'Wind',
    metric: '< 15 dB',
    metricLabel: 'Acoustic footprint under maximum load',
    badge: 'Silent Studio'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'elena-rostova',
    quote: 'We shifted our entire 32-person motion graphics studio to MacBook Pro M4 Max workstations with Pro Display XDR 2s. The difference is night and day: our designers no longer wait for proxy renders, and the 120Hz ProMotion screen reveals timing nuances we simply missed at 60Hz.',
    author: 'Elena Rostova',
    role: 'Executive Creative Director',
    studio: 'Kroma Motion Studios (London)',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    category: 'Motion Graphics',
    projectExample: 'Global Brand Identity & 3D Title Sequence for Prime Video',
    renderTimeReduction: '72% faster final output across 4K deliverables'
  },
  {
    id: 'marcus-vance',
    quote: 'In visual effects and fluid particle simulation, memory bottlenecking used to kill our creative flow. Having 128GB of unified memory on a laptop that fits in my backpack while delivering desktop-beating ray tracing speed feels like science fiction. Apple ProMotion is the holy grail for motion artists.',
    author: 'Marcus Vance',
    role: 'Lead VFX Supervisor & Simulation Specialist',
    studio: 'Vance FX / ex-Framestore',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    category: 'VFX',
    projectExample: 'Sci-Fi Feature Film Real-Time Pyro & Fluid Sims',
    renderTimeReduction: '4.5x faster viewport simulation in Cinema 4D Redshift'
  },
  {
    id: 'sofia-chen',
    quote: 'As a UI/UX motion designer specializing in spatial computing and high-refresh web transitions, I need to feel the exact weight and physics of every microinteraction. The 120Hz ProMotion display combined with tactile haptic feedback from Apple Pencil Pro on Sidecar has elevated my work to an entirely new standard.',
    author: 'Sofia Chen',
    role: 'Principal Interactive Design Director',
    studio: 'Spatial Craft Collective (San Francisco)',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    category: 'UI/UX Interactive',
    projectExample: 'Apple Vision Pro Spatial App Interface & Fluid Navigation',
    renderTimeReduction: 'Instant zero-latency prototype live preview'
  },
  {
    id: 'david-alarcon',
    quote: 'When designing broadcast packages with intense chromatic dispersion and glass refraction, color fidelity is everything. The Quantum OLED Pro Display XDR 2 renders deep obsidian blacks right next to searing 1600-nit neon highlights without blooming. Our clients are consistently blown away.',
    author: 'David Alarcon',
    role: 'Founding Partner & Motion Lead',
    studio: 'Alarcon Visual Agency (Madrid / NYC)',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=200&w=200',
    category: '3D Animation',
    projectExample: 'Super Bowl LIX Luxury Automotive Commercial Broadcast Package',
    renderTimeReduction: 'Saved 18 hours per week per designer in iteration time'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'creator-pro',
    name: 'Individual Pro Creator',
    tagline: 'Ideal for freelance motion designers, 3D generalists, and UI motion innovators.',
    priceMonthly: 199,
    priceUpfront: 3499,
    popular: false,
    features: [
      'MacBook Pro 16" with M4 Pro (14-Core CPU, 20-Core GPU, 36GB Unified Memory)',
      '1TB Ultra-Fast SSD (up to 7.4 GB/s read velocity)',
      'Apple Motion 6 & Final Cut Pro X Lifetime Studio License included',
      'AppleCare+ for Mac with 24/7 Priority Creative Engineer Support',
      'Free Access to Apple Motion Design Live Masterclasses & Workshop Vault'
    ],
    hardwareIncluded: [
      'MacBook Pro 16" Space Black',
      '140W USB-C Power Adapter & MagSafe 3 Cable'
    ],
    ctaText: 'Configure Creator Setup'
  },
  {
    id: 'studio-workstation',
    name: 'ProMotion Studio Flagship',
    tagline: 'The definitive workstation bundle for demanding 3D fluid sims & ray tracing.',
    priceMonthly: 399,
    priceUpfront: 6499,
    popular: true,
    features: [
      'MacBook Pro 16" with M4 Max (16-Core CPU, 40-Core GPU, 64GB Unified Memory)',
      '2TB NVMe PCIe Gen 4 SSD Storage',
      'Pro Display XDR 2 (32" 6K Quantum OLED 120Hz) with Pro Stand included',
      'Apple Magic Keyboard with Touch ID + Magic Trackpad Space Black',
      'Complete Apple Creative Software Suite (Final Cut, Motion, Logic, Compressor)',
      'Dedicated Apple Pro Studio Onboarding & Calibration Consultation'
    ],
    hardwareIncluded: [
      'MacBook Pro 16" M4 Max Space Black',
      'Pro Display XDR 2 + Pro Stand',
      'Space Black Magic Keyboard & Trackpad'
    ],
    ctaText: 'Order Studio Flagship'
  },
  {
    id: 'enterprise-collective',
    name: 'Enterprise Studio Team',
    tagline: 'Customized multi-station deployments for agency teams and global VFX studios.',
    priceMonthly: 899,
    priceUpfront: 14999,
    popular: false,
    features: [
      '3x or more Custom Workstations up to 128GB Unified Memory & 8TB Storage',
      'Multiple Pro Display XDR 2 setups with Nano-Texture Glass options',
      '10Gb Ethernet high-speed shared storage network adapters included',
      'Dedicated Apple Enterprise Technical Account Manager & Next-Day Swap',
      'Flexible Trade-In & Hardware Upgrade Refresh Cycle every 24 or 36 months'
    ],
    hardwareIncluded: [
      'Custom Multi-MacBook Pro / Mac Studio Fleet',
      'Pro Display XDR 2 Multi-Monitor Rigs',
      'On-Site White-Glove Installation'
    ],
    ctaText: 'Contact Studio Enterprise'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How does 120Hz ProMotion directly impact my daily workflow in After Effects, Cinema 4D, or Blender?',
    answer: 'At 120Hz, your display updates twice as fast as standard 60Hz monitors. When scrubbing through complex timelines, adjusting keyframe Bezier ease handles, or previewing fluid dynamics, motion appears twice as responsive with near-zero latency. You can judge the true weight, elasticity, and pacing of your animations with absolute confidence without rendering out preview videos first.',
    category: 'ProMotion & Color'
  },
  {
    id: 'faq-2',
    question: 'Can the MacBook Pro M4 Max handle multi-million polygon scenes and heavy GPU particle emitters without choking?',
    answer: 'Absolutely. The M4 Max features up to 40 GPU cores equipped with 2nd-generation hardware ray tracing and up to 128GB of unified memory (with 546 GB/s memory bandwidth). This allows the system to load massive 3D scenes, 8K textures, and volumetric particle simulations directly into unified memory—capabilities that regularly cause discrete GPU VRAM crashes on traditional PC laptops.',
    category: 'Hardware & M4 Max'
  },
  {
    id: 'faq-3',
    question: 'Are popular motion design plugins (Red Giant, Video Copilot, X-Particles, Octane, Redshift) fully native on M4 Max?',
    answer: 'Yes! Major render engines including Maxon Redshift, OTOY OctaneRender, and Blender Cycles have deep native Apple Metal 3 and hardware ray-tracing optimizations specifically engineered for M4 Max. Popular Adobe After Effects plugins from Maxon, Boris FX, and Aescripts run natively on Apple Silicon with multi-frame rendering acceleration.',
    category: 'Software Compatibility'
  },
  {
    id: 'faq-4',
    question: 'How does the Pro Display XDR 2 maintain reference color accuracy while running at 120Hz ProMotion?',
    answer: 'Pro Display XDR 2 utilizes a custom Quantum OLED micro-lens array coupled with our custom timing controller (TCON). Each panel undergoes rigorous factory calibration across RGB spectrum, gamma curves, and brightness uniformity from 1 nits to 1,600 nits. You can lock the display into exact reference refresh rates (24Hz, 25Hz, 30Hz, 48Hz, 50Hz, 60Hz, or adaptive 120Hz ProMotion) with single-click reference modes.',
    category: 'ProMotion & Color'
  },
  {
    id: 'faq-5',
    question: 'Can I connect multiple 6K 120Hz Pro Display XDR 2 monitors simultaneously to the MacBook Pro M4 Max?',
    answer: 'Yes. Thanks to the massive Thunderbolt 5 bandwidth (up to 120 Gb/s bidirectional speed) on the M4 Max, you can drive up to four external high-resolution studio monitors simultaneously, including two 6K Pro Display XDR 2s running at full 120Hz ProMotion plus an additional 4K reference monitor over HDMI 2.1.',
    category: 'Hardware & M4 Max'
  },
  {
    id: 'faq-6',
    question: 'What trade-in credits and studio financing options are available for upgrading our current workstations?',
    answer: 'Through the Apple Pro Studio Trade-In Program, you can receive up to $1,850 in instant credit toward your M4 Max purchase when trading in eligible Intel, M1 Max, or M2 Max MacBook Pro models. We also offer 0% APR 24-month business financing and flexible studio leasing plans that allow creative teams to upgrade hardware every 2 years.',
    category: 'Financing & Trade-in'
  }
];

export const CLIENT_STUDIOS = [
  { name: 'Buck', location: 'LA / NY / Sydney', specialty: 'Brand Motion & 3D' },
  { name: 'ManvsMachine', location: 'London / LA', specialty: 'High-End CGI & Design' },
  { name: 'Territory Studio', location: 'London / San Francisco', specialty: 'Film FUI & Motion Graphics' },
  { name: 'Pentagram', location: 'Global Design Consultancy', specialty: 'Interactive Brand Systems' },
  { name: 'Weta FX', location: 'Wellington', specialty: 'Feature VFX & Simulation' },
  { name: 'Media.Monks', location: 'Global Creative Agency', specialty: 'Digital & Interactive Motion' }
];
