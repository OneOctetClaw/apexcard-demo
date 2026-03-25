/**
 * APEXCARD i18n — International translation system
 * Supports: FR (default) / EN
 */

const TRANSLATIONS = {
  fr: {
    // ── GLOBAL / SHARED ──────────────────────────────────────────
    'nav.features': 'Features',
    'nav.security': 'Sécurité',
    'nav.affiliate': 'Affiliés',
    'nav.yield': 'Yield',
    'nav.pricing': 'Tarifs',
    'nav.login': 'Se connecter',
    'nav.open_account': 'Ouvrir un compte',
    'nav.back_home': "← Retour à l\'accueil",
    'footer.rights': '© 2026 APEXCARD Financial SAS. Tous droits réservés.',
    'footer.col.product': 'Produit',
    'footer.col.company': 'Entreprise',
    'footer.col.support': 'Support',
    'footer.col.legal': 'Légal',
    'footer.tagline': 'La plateforme financière de nouvelle génération. Crypto, IBAN, carte physique — tout en un.',

    // ── INDEX ─────────────────────────────────────────────────────
    'index.badge': '🌍 Disponible dans 180+ pays',
    'index.hero.title1': 'Banking',
    'index.hero.title2': 'without borders.',
    'index.hero.sub': 'La première plateforme financière qui combine crypto, IBAN personnel, et carte physique — sans compromis.',
    'index.hero.cta_main': 'Ouvrir mon compte gratuitement',
    'index.hero.cta_demo': 'Voir la démo',
    'index.social_proof': 'Déjà <strong>3,847</strong> clients dans <strong>47</strong> pays',
    'index.fs1.label': 'Portfolio',
    'index.fs1.change': "▲ +4.2% aujourd\'hui",
    'index.fs2.label': 'BTC Balance',
    'index.fs3.label': 'Yield accumulé',
    'index.fs3.change': '24% APY',
    'index.fs4.label': 'Transactions',
    'index.fs4.change': 'ce mois',

    // Stats
    'index.stat0.label': 'Clients actifs',
    'index.stat0.sub': 'dans 47 pays',
    'index.stat1.label': 'Pays supportés',
    'index.stat1.sub': 'couverture mondiale',
    'index.stat2.label': 'Volume traité',
    'index.stat2.sub': 'ce mois',
    'index.stat3.label': 'APY Yield',
    'index.stat3.sub': 'rendement annuel',

    // Features
    'index.features.tag': 'Features',
    'index.features.title': 'Tout ce dont vous avez besoin',
    'index.features.sub': 'Une plateforme. Zéro compromis.',
    'index.card.title': 'Votre carte. Partout dans le monde.',
    'index.card.desc': 'Carte physique et virtuelle, acceptée dans 180+ pays. Paiements sans contact, retraits ATM, zéro frais cachés.',
    'index.iban.title': 'Votre RIB à votre nom',
    'index.iban.sub': 'Compte EUR, GBP, USD',
    'index.swap.title': 'Convertissez en secondes',
    'index.yield_card.title': 'Faites travailler votre argent',
    'index.yield_card.desc': 'Déposez vos stablecoins et regardez votre solde croître.',
    'index.yield_card.label': 'Simulez votre rendement mensuel',
    'index.kyc.title': 'Vérification en 3 min',
    'index.kyc.step1': 'Email & téléphone',
    'index.kyc.step1.status': 'Fait',
    'index.kyc.step2': "Pièce d\'identité",
    'index.kyc.step2.status': 'Vérifié',
    'index.kyc.step3': 'Selfie liveness',
    'index.kyc.step3.status': 'En cours',
    'index.security_card.title': 'Sécurité de niveau bancaire',

    // Security section
    'index.security.tag': 'Sécurité',
    'index.security.title': 'Protégé à chaque instant',
    'index.security.sub': 'Vos fonds et vos données sont protégés par des standards de sécurité bancaire de niveau institutionnel.',
    'index.security.feat1.title': 'Chiffrement AES-256 + TLS 1.3',
    'index.security.feat1.desc': 'Toutes les communications sont chiffrées de bout en bout. Vos données ne quittent jamais nos serveurs sécurisés.',
    'index.security.feat2.title': 'IA Anti-fraude en temps réel',
    'index.security.feat2.desc': "Notre modèle d\'IA analyse chaque transaction et bloque les activités suspectes avant qu\'elles n\'arrivent.",
    'index.security.feat3.title': 'Fonds ségrégués & assurés',
    'index.security.feat3.desc': "Vos fonds sont stockés séparément dans des comptes ségrégués, assurés jusqu\'à €100,000.",

    // Affiliate
    'index.affiliate.tag': 'Programme Affilié',
    'index.affiliate.title': 'Gagnez en dormant',
    'index.affiliate.sub': 'Invitez vos amis et touchez des commissions sur 3 niveaux. Plus votre réseau grandit, plus vous gagnez.',
    'index.affiliate.l1.title': 'Filleuls directs',
    'index.affiliate.l1.desc': 'Commissions sur les transactions de vos filleuls directs',
    'index.affiliate.l2.title': 'Filleuls de vos filleuls',
    'index.affiliate.l2.desc': 'Commissions sur les transactions du 2ème niveau',
    'index.affiliate.l3.title': '3ème niveau',
    'index.affiliate.l3.desc': 'Commissions passives sur le 3ème niveau de réseau',

    // Yield section
    'index.yield.tag': 'Yield',
    'index.yield.title': 'Votre argent ne dort jamais',
    'index.yield.apy_label': 'APY sur stablecoins (USDT, USDC)',
    'index.yield.sim_title': 'Calculez votre rendement annuel',
    'index.yield.monthly_label': 'Gain mensuel estimé',
    'index.yield.annual_label': 'Gain annuel estimé',
    'index.yield.cta': 'Commencer à générer du yield',

    // Live feed
    'index.live.label': 'Activité en temps réel',

    // Pricing
    'index.pricing.tag': 'Tarifs',
    'index.pricing.title': 'Simple. Transparent. Honnête.',
    'index.pricing.sub': 'Choisissez le plan qui vous correspond. Changez quand vous voulez.',
    'index.pricing.starter': 'Starter',
    'index.pricing.starter.price': 'Gratuit',
    'index.pricing.starter.period': 'Pour toujours',
    'index.pricing.starter.cta': 'Commencer gratuitement',
    'index.pricing.standard': 'Standard',
    'index.pricing.standard.period': 'par mois · sans engagement',
    'index.pricing.standard.cta': 'Ouvrir un compte Standard',
    'index.pricing.premium': 'Premium',
    'index.pricing.premium.period': 'par mois · facturation annuelle',
    'index.pricing.premium.cta': 'Passer Premium',
    'index.pricing.popular': '⭐ Populaire',
    'index.pricing.f.virtual_card': 'Carte virtuelle Mastercard',
    'index.pricing.f.iban_eur': 'IBAN personnel (EUR)',
    'index.pricing.f.limit_500': 'Limite €500/mois',
    'index.pricing.f.kyc0': 'KYC Tier 0',
    'index.pricing.f.swap_basic': 'Swap crypto basique',
    'index.pricing.f.support_email': 'Support email',
    'index.pricing.f.phys_card': 'Carte physique Mastercard Gold',
    'index.pricing.f.iban_multi': 'IBAN EUR + GBP + USD',
    'index.pricing.f.limit_5k': 'Limite €5,000/mois',
    'index.pricing.f.kyc12': 'KYC Tier 1 & 2',
    'index.pricing.f.swap_unlimited': 'Swap illimité (0.1% spread)',
    'index.pricing.f.apple_google': 'Apple Pay & Google Pay',
    'index.pricing.f.support_chat': 'Support chat prioritaire',
    'index.pricing.f.gold_card': 'Carte Gold métal gravée',
    'index.pricing.f.unlimited': 'Limites illimitées',
    'index.pricing.f.kyc3': 'KYC Tier 3 (business)',
    'index.pricing.f.yield': 'Yield 24% APY inclus',
    'index.pricing.f.manager': 'Manager dédié',
    'index.pricing.f.api': 'API accès direct',
    'index.pricing.f.sla': 'SLA 99.99% garanti',

    // FAQ
    'index.faq.tag': 'FAQ',
    'index.faq.title': 'Questions fréquentes',
    'index.faq.q1': 'Comment ouvrir un compte APEXCARD ?',
    'index.faq.a1': "L\'ouverture de compte prend moins de 5 minutes. Il vous suffit d\'un email, d\'un numéro de téléphone et d\'une pièce d\'identité valide. Notre KYC est entièrement digital — pas de courrier, pas de rendez-vous.",
    'index.faq.q2': 'Comment fonctionne le programme de yield ?',
    'index.faq.a2': "Déposez des stablecoins (USDT, USDC) dans votre portefeuille APEXCARD et gagnez jusqu\'à 24% APY. Les intérêts sont distribués quotidiennement et peuvent être retirés à tout moment sans frais.",
    'index.faq.q3': 'Mes fonds sont-ils en sécurité ?',
    'index.faq.a3': "Oui. Vos fonds fiat sont ségrégués et assurés jusqu\'à €100,000. Vos crypto sont stockés avec une solution multi-sig cold/hot wallet. Nous sommes régulés et conformes aux exigences européennes EMD2.",
    'index.faq.q4': 'Quels sont les frais de conversion crypto ?',
    'index.faq.a4': "Le spread est de seulement 0.1% sur les paires majeures (BTC, ETH, SOL, USDT). Aucun frais fixe caché. Les utilisateurs Premium bénéficient d\'un spread de 0.05%.",
    'index.faq.q5': "Puis-je utiliser la carte à l\'étranger ?",
    'index.faq.a5': 'Absolument. Votre carte APEXCARD est acceptée dans 180+ pays via le réseau Mastercard. Les retraits ATM sont à 1% (gratuits pour les comptes Premium). Le taux de change appliqué est le taux interbancaire du marché.',

    // CTA
    'index.cta.title': 'Prêt à rejoindre<br><span class="gradient-text">la révolution financière ?</span>',
    'index.cta.sub': '3,847 personnes ont déjà franchi le pas. Votre tour.',
    'index.cta.btn': 'Créer mon compte gratuitement',

    // ── LOGIN ─────────────────────────────────────────────────────
    'login.tagline': 'Banking without borders',
    'login.role.label': 'Choisissez votre rôle',
    'login.role.client': 'Client',
    'login.role.client.desc': 'Compte personnel',
    'login.role.admin': 'Admin',
    'login.role.admin.desc': 'Panneau de gestion',
    'login.email.label': 'Adresse email',
    'login.email.placeholder': 'vous@apexcard.io',
    'login.pwd.label': 'Mot de passe',
    'login.btn': 'Se connecter à APEXCARD',
    'login.divider': 'ou accès rapide',
    'login.demo_client': '⚡ Démo Client',
    'login.demo_admin': '⚡ Démo Admin',
    'login.timeout': "🔒 Votre session a expiré en raison d\'inactivité. Veuillez vous reconnecter.",
    'login.error.credentials': 'Identifiants invalides. Vérifiez votre email et mot de passe.',
    'login.error.empty': 'Veuillez saisir votre email et mot de passe.',
    'login.error.generic': 'Une erreur est survenue. Veuillez réessayer.',
    'login.authenticating': 'Authentification…',
    'login.lockout': 'Trop de tentatives échouées. Veuillez patienter {n} minute{s} avant de réessayer.',

    // ── ONBOARDING ────────────────────────────────────────────────
    'onboarding.title': 'Ouvrir un compte',
    'onboarding.existing': 'Déjà client ?',
    'onboarding.step.plan': 'Plan',
    'onboarding.step.account': 'Compte',
    'onboarding.step.email': 'Email',
    'onboarding.step.profile': 'Profil',
    'onboarding.step.kyc': 'KYC',
    'onboarding.step.card': 'Carte',
    'onboarding.step.topup': 'Recharge',
    'onboarding.step.welcome': 'Bienvenue',

    // Step 1 - Plan
    'onboarding.s1.tag': 'Étape 1 sur 8',
    'onboarding.s1.title': 'Choisissez votre plan',
    'onboarding.s1.sub': 'Commencez gratuitement ou débloquez toutes les fonctionnalités dès le départ',
    'onboarding.plan.starter': 'Starter',
    'onboarding.plan.starter.price': 'Gratuit',
    'onboarding.plan.standard': 'Standard',
    'onboarding.plan.premium': 'Premium',
    'onboarding.plan.cta': 'Choisir ce plan',
    'onboarding.plan.popular': '⭐ Populaire',
    'onboarding.plan.note': '🔄 Changez de plan à tout moment · Sans engagement · Annulation en 1 clic',

    // Step 2 - Account
    'onboarding.s2.tag': 'Étape 2 sur 8',
    'onboarding.s2.title': 'Créer votre compte',
    'onboarding.s2.sub': 'Vos informations de connexion sécurisées',
    'onboarding.s2.firstname': 'Prénom',
    'onboarding.s2.lastname': 'Nom',
    'onboarding.s2.email': 'Adresse email',
    'onboarding.s2.password': 'Mot de passe',
    'onboarding.s2.confirm_pwd': 'Confirmer le mot de passe',
    'onboarding.s2.phone': 'Numéro de téléphone',
    'onboarding.s2.pwd.length': '8+ caractères',
    'onboarding.s2.pwd.upper': 'Majuscule',
    'onboarding.s2.pwd.number': 'Chiffre',
    'onboarding.s2.pwd.special': 'Caractère spécial',
    'onboarding.s2.cgu': `J'accepte les <a href="#">Conditions Générales d'Utilisation</a> et la <a href="#">Politique de confidentialité</a>`,
    'onboarding.s2.age': 'Je certifie avoir 18 ans ou plus',
    'onboarding.btn.back': '← Retour',
    'onboarding.btn.continue': 'Continuer →',

    // Step 3 - Email verification
    'onboarding.s3.tag': 'Étape 3 sur 8',
    'onboarding.s3.title': 'Vérification email',
    'onboarding.s3.sub': 'Confirmez votre adresse pour sécuriser votre compte',
    'onboarding.s3.sent': 'Code de vérification envoyé',
    'onboarding.s3.hint': 'Nous avons envoyé un code à',
    'onboarding.s3.enter': 'Entrez le code à 6 chiffres',
    'onboarding.s3.resend_timer': 'Renvoyer le code dans',
    'onboarding.s3.resend_btn': 'Renvoyer le code',
    'onboarding.s3.success': 'Email vérifié avec succès !',
    'onboarding.s3.redirect': 'Redirection en cours...',

    // Step 4 - Profile
    'onboarding.s4.tag': 'Étape 4 sur 8',
    'onboarding.s4.title': 'Informations personnelles',
    'onboarding.s4.sub': 'Pour votre sécurité et conformité réglementaire',
    'onboarding.s4.birthdate': 'Date de naissance',
    'onboarding.s4.nationality': 'Nationalité',
    'onboarding.s4.country': 'Pays de résidence',
    'onboarding.s4.profession': 'Profession',
    'onboarding.s4.address1': 'Adresse ligne 1',
    'onboarding.s4.address2': 'Adresse ligne 2',
    'onboarding.s4.address2.optional': '(optionnel)',
    'onboarding.s4.city': 'Ville',
    'onboarding.s4.postal': 'Code postal',
    'onboarding.s4.income': 'Source de revenus',

    // Step 5 - KYC
    'onboarding.s5.tag': 'Étape 5 sur 8',
    'onboarding.s5.title': "Vérification d\'identité",
    'onboarding.s5.sub': 'KYC réglementaire — sécurisé et confidentiel',
    'onboarding.s5.doc_title': "Choisissez votre document d\'identité",
    'onboarding.s5.formats': 'Formats acceptés : JPG, PNG, PDF · Max 10MB',
    'onboarding.s5.selfie.title': 'Selfie de vérification',
    'onboarding.s5.selfie.sub': "Prenez un selfie en tenant votre document d\'identité visible",
    'onboarding.s5.selfie.btn': '📸 Prendre le selfie',
    'onboarding.s5.verifying.title': 'Vérification en cours',
    'onboarding.s5.verifying.sub': 'Veuillez patienter quelques instants...',
    'onboarding.s5.verified': '✅ Identité vérifiée',

    // Step 6 - Card
    'onboarding.s6.tag': 'Étape 6 sur 8',
    'onboarding.s6.title': 'Configurez votre carte',
    'onboarding.s6.sub': 'Personnalisez votre carte APEXCARD',
    'onboarding.s6.card_type': 'Type de carte',
    'onboarding.s6.virtual': 'Carte Virtuelle',
    'onboarding.s6.physical': 'Carte Physique',
    'onboarding.s6.customize': 'Personnalisation',
    'onboarding.s6.name_on_card': 'Nom sur la carte',
    'onboarding.s6.currency': 'Devise principale',
    'onboarding.s6.limit': 'Limite par transaction :',
    'onboarding.s6.pin': 'Code PIN (4 chiffres)',

    // Step 7 - Top up
    'onboarding.s7.tag': 'Étape 7 sur 8',
    'onboarding.s7.title': 'Rechargez votre carte',
    'onboarding.s7.sub': 'Commencez à utiliser votre carte APEXCARD immédiatement',
    'onboarding.s7.crypto': '🪙 Crypto',
    'onboarding.s7.sepa': '🏦 Virement SEPA',

    // Step 8 - Welcome
    'onboarding.s8.tag': 'Étape 8 sur 8',
    'onboarding.s8.title': 'Bienvenue !',

    // ── APP USER ──────────────────────────────────────────────────
    'app.section.main': 'Main',
    'app.section.banking': 'Banking',
    'app.section.account': 'Account',
    'app.nav.dashboard': 'Dashboard',
    'app.nav.cards': 'Mes Cartes',
    'app.nav.wallet': 'Portefeuille Crypto',
    'app.nav.swap': 'Swap',
    'app.nav.iban': 'Comptes IBAN',
    'app.nav.yield': 'Yield & Staking',
    'app.nav.affiliate': 'Parrainage',
    'app.nav.kyc': 'Vérification KYC',
    'app.nav.settings': 'Paramètres',
    'app.logout': 'Se déconnecter',

    // Dashboard
    'app.dashboard.title': 'Dashboard',
    'app.dashboard.welcome': 'Bon retour 👋',
    'app.dashboard.balance_label': 'Valeur totale du portefeuille',
    'app.dashboard.change': '↑ +12.4% &nbsp; +$3,301.25 ce mois',
    'app.dashboard.send': '↑ Envoyer',
    'app.dashboard.receive': '↓ Recevoir',
    'app.dashboard.topup': '+ Recharger',

    // Cards page
    'app.cards.title': 'Mes Cartes',
    'app.cards.sub': '2 cartes actives',
    'app.cards.online': 'Paiements en ligne',
    'app.cards.contactless': 'Sans contact',
    'app.cards.international': 'International',
    'app.cards.atm': 'Retraits ATM',

    // Wallet
    'app.wallet.title': 'Portefeuille Crypto',
    'app.wallet.sub': 'Avoirs multi-chaînes',

    // Swap
    'app.swap.title': 'Swap',
    'app.swap.sub': 'Exchange alimenté par la DeFi',
    'app.swap.rate': 'Taux',
    'app.swap.fee': 'Frais réseau',
    'app.swap.min': 'Minimum reçu',
    'app.swap.confirm': 'Confirmer le Swap ⇄',

    // IBAN
    'app.iban.title': 'Comptes IBAN',
    'app.iban.sub': 'Banque multi-devises',
    'app.iban.copy': '📋 Copier IBAN',
    'app.iban.download': '📥 Télécharger RIB',

    // Yield
    'app.yield.title': 'Yield & Staking',
    'app.yield.sub': 'Générez des revenus passifs sur vos cryptos',
    'app.yield.staked': 'Total misé',
    'app.yield.monthly': 'Gains mensuels',

    // Affiliate
    'app.affiliate.title': 'Programme de Parrainage',
    'app.affiliate.sub': 'Gagnez en parrainant vos amis',
    'app.affiliate.copy': '📋 Copier le lien',

    // KYC
    'app.kyc.title': 'Vérification KYC',
    'app.kyc.sub': "Statut de vérification d\'identité",
    'app.kyc.email': 'Email',
    'app.kyc.phone': 'Téléphone',
    'app.kyc.identity': 'Identité',
    'app.kyc.address': 'Adresse',

    // Settings
    'app.settings.title': 'Paramètres',
    'app.settings.sub': 'Gérer votre compte',
    'app.settings.profile': 'Informations de profil',
    'app.settings.security': 'Sécurité',
    'app.settings.2fa': 'Authentification à deux facteurs',
    'app.settings.2fa.desc': 'Protégez votre compte avec la 2FA',
    'app.settings.login_notif': 'Notifications de connexion',
    'app.settings.login_notif.desc': 'Alerte email lors de nouvelles connexions',
    'app.settings.biometric': 'Connexion biométrique',
    'app.settings.biometric.desc': 'Utiliser Face ID / empreinte digitale',
    'app.settings.notifications': 'Notifications',
    'app.settings.tx_alerts': 'Alertes de transactions',
    'app.settings.tx_alerts.desc': 'Notifier à chaque transaction',
    'app.settings.price_alerts': 'Alertes de prix',
    'app.settings.price_alerts.desc': 'Alertes de variation de prix crypto',
    'app.settings.firstname.placeholder': 'Prénom',
    'app.settings.lastname.placeholder': 'Nom',
    'app.settings.phone.placeholder': '+33 6 ...',
    'app.settings.newpwd.placeholder': 'Nouveau mot de passe (min. 6 car.)',

    // Modals
    'modal.send.title': 'Envoyer des fonds',
    'modal.receive.title': 'Recevoir des cryptos',
    'modal.topup.title': 'Recharger',
    'modal.deposit.title': 'Déposer des cryptos',
    'modal.withdraw.title': 'Envoyer des cryptos',
    'modal.wire.title': 'Virement bancaire',
    'modal.stake.title': 'Staker des cryptos',
    'modal.kyc.title': 'Uploader un document KYC',
    'modal.card_order.title': 'Commander une nouvelle carte',
    'modal.card_topup.title': 'Recharger la carte',
    'modal.crypto_withdraw.title': 'Retrait crypto',

    // Toast messages
    'toast.swap_success': '✅ Swap exécuté avec succès !',
    'toast.swap_demo': '✅ Swap exécuté (mode démo) !',
    'toast.swap_tokens': 'Tokens échangés !',
    'toast.swap_invalid': '⚠️ Entrez un montant valide',
    'toast.not_auth': '⚠️ Non authentifié',
    'toast.fill_fields': '⚠️ Remplissez tous les champs',
    'toast.card_ordered': '✅ Carte commandée avec succès !',
    'toast.card_demo': '✅ Commande de carte passée (démo) !',
    'toast.withdraw_submitted': '✅ Retrait soumis !',
    'toast.withdraw_demo': '✅ Retrait soumis (démo) !',
    'toast.wire_sent': '✅ Virement envoyé !',
    'toast.wire_demo': '✅ Virement traité (démo) !',
    'toast.rib_download': '📄 RIB téléchargé (démo) !',
    'toast.details_download': '📄 Détails téléchargés (démo) !',
    'toast.code_copied': '✅ Code copié !',
    'toast.iban_copied': '✅ IBAN copié !',
    'toast.setting_on': '✅ Activé',
    'toast.setting_off': '✅ Désactivé',
    'toast.setting_updated': '✅ Paramètre mis à jour (démo) !',
    'toast.profile_saved': '✅ Profil sauvegardé !',
    'toast.profile_demo': '✅ Profil mis à jour (démo) !',

    // ── APP ADMIN ─────────────────────────────────────────────────
    'admin.nav.overview': "Vue d\'ensemble",
    'admin.nav.users': 'Utilisateurs',
    'admin.nav.cards': 'Cartes',
    'admin.nav.transactions': 'Transactions',
    'admin.nav.kyc': 'KYC Pending',
    'admin.nav.affiliates': 'Affiliés',
    'admin.nav.yield': 'Yield',
    'admin.nav.finances': 'Finances P&L',
    'admin.nav.audit': 'Audit Log',
    'admin.nav.logins': 'Connexions',
    'admin.nav.settings': 'Paramètres système',
    'admin.logout': 'Se déconnecter',

    'admin.kpi.users': 'Utilisateurs',
    'admin.kpi.cards': 'Cartes actives',
    'admin.kpi.volume': 'Volume 30j',
    'admin.kpi.revenue': 'Revenue',
    'admin.kpi.yield': 'Yield géré',
    'admin.kpi.affiliates': 'Affiliés actifs',
    'admin.kpi.kyc_pending': 'KYC Pending',

    'admin.chart.revenue': 'Revenue 12 mois ($)',
    'admin.chart.tx': 'Transactions / jour',
    'admin.alerts.title': '⚠️ Alertes système',
    'admin.top_users.title': '🏆 Top 5 utilisateurs par volume',

    'admin.users.search': '🔍 Rechercher par nom, email, ID...',
    'admin.users.th.id': 'ID',
    'admin.users.th.name': 'Nom',
    'admin.users.th.email': 'Email',
    'admin.users.th.tier': 'KYC Tier',
    'admin.users.th.cards': 'Cartes',
    'admin.users.th.balance': 'Solde',
    'admin.users.th.volume': 'Volume 30j',
    'admin.users.th.date': 'Date',
    'admin.users.th.status': 'Statut',

    'admin.cards.title': '💳 Cartes émises',
    'admin.cards.th.id': 'ID',
    'admin.cards.th.user': 'Utilisateur',
    'admin.cards.th.type': 'Type',
    'admin.cards.th.number': 'Numéro',
    'admin.cards.th.status': 'Statut',
    'admin.cards.th.balance': 'Solde',
    'admin.cards.th.limit': 'Limite',
    'admin.cards.th.last_tx': 'Dernière tx',
    'admin.cards.th.action': 'Action',

    'admin.tx.th.id': 'ID',
    'admin.tx.th.user': 'Utilisateur',
    'admin.tx.th.type': 'Type',
    'admin.tx.th.amount': 'Montant',
    'admin.tx.th.currency': 'Devise',
    'admin.tx.th.status': 'Statut',
    'admin.tx.th.date': 'Date',

    'admin.kyc.title': '🪪 Dossiers KYC en attente',
    'admin.kyc.none': '✅ Aucun dossier KYC en attente',
    'admin.kyc.approve': '✅ KYC approuvé — utilisateur notifié',
    'admin.kyc.reject': '❌ KYC rejeté',

    'admin.affiliate.kpi.active': 'Affiliés actifs',
    'admin.affiliate.kpi.pending': 'Commissions pending',
    'admin.affiliate.kpi.volume': 'Volume réseau',
    'admin.affiliate.top.title': 'Top affiliés',
    'admin.affiliate.th.affiliate': 'Affilié',
    'admin.affiliate.th.referrals': 'Filleuls',
    'admin.affiliate.th.volume': 'Volume réseau',
    'admin.affiliate.th.commissions': 'Commissions',
    'admin.affiliate.th.level': 'Niveau',
    'admin.affiliate.th.status': 'Statut',

    'admin.yield.kpi.managed': 'Capital géré',
    'admin.yield.kpi.monthly': 'À verser ce mois',
    'admin.yield.kpi.total': 'Total versé',
    'admin.yield.investors.title': 'Investisseurs',
    'admin.yield.th.investor': 'Investisseur',
    'admin.yield.th.amount': 'Montant',
    'admin.yield.th.round': 'Round',
    'admin.yield.th.apy': 'APY',
    'admin.yield.th.earned': 'Gain cumulé',
    'admin.yield.th.next': 'Prochain versement',
    'admin.yield.th.status': 'Statut',

    'admin.finances.pnl': '📊 P&L — Mars 2026',
    'admin.finances.revenue_split': 'Répartition revenus',
    'admin.finances.float': 'Float providers',

    'admin.audit.title': '🛡️ Audit Log',
    'admin.audit.sub': 'Actions administratives et événements de sécurité',
    'admin.audit.th.date': 'Date',
    'admin.audit.th.action': 'Action',
    'admin.audit.th.operator': 'Opérateur',
    'admin.audit.th.details': 'Détails',
    'admin.audit.th.ip': 'IP',

    'admin.logins.title': '🔐 Tentatives de connexion',
    'admin.logins.sub': 'Historique des authentifications et tentatives suspectes',
    'admin.logins.th.date': 'Date',
    'admin.logins.th.email': 'Email',
    'admin.logins.th.status': 'Statut',
    'admin.logins.th.ip': 'IP',
    'admin.logins.th.device': 'Appareil',

    'admin.settings.title': 'Paramètres système',
    'admin.settings.maintenance': 'Mode maintenance',

    'admin.toast.suspicious': '🚨 Transaction suspecte : $',
    'admin.toast.new_user': '🆕 Nouvel utilisateur : ',
    'admin.toast.card_blocked': 'Carte bloquée',

    // ── PRIVACY ───────────────────────────────────────────────────
    'privacy.title': 'Politique de confidentialité',
    'privacy.badge': '🔒 RGPD Conforme — Dernière mise à jour : Mars 2026',
    'privacy.sub': 'Nous prenons la protection de vos données personnelles très au sérieux. Ce document vous informe sur la manière dont APEXCARD collecte, utilise et protège vos données.',
    'privacy.toc.title': 'Sommaire',
    'privacy.h.controller': '1. Responsable du traitement',
    'privacy.h.data': '2. Données personnelles collectées',
    'privacy.h.purposes': '3. Finalités du traitement et bases légales',
    'privacy.h.retention': '4. Durée de conservation',
    'privacy.h.rights': '5. Vos droits',
    'privacy.h.security': '6. Sécurité des données',
    'privacy.h.transfers': '7. Transferts internationaux',
    'privacy.h.cookies': '8. Cookies et traceurs',
    'privacy.h.contact': '9. Contact et DPO',
    'privacy.h.changes': '10. Modifications de cette politique',

    // ── LEGAL ─────────────────────────────────────────────────────
    'legal.title': "Conditions Générales d\'Utilisation",
    'legal.badge': '📋 Version 2.0 — Mars 2026',
    'legal.sub': "Les présentes Conditions Générales d\'Utilisation (CGU) régissent l\'accès et l\'utilisation des services APEXCARD. En vous inscrivant, vous acceptez sans réserve ces conditions.",
    'legal.h.scope': "1. Objet et champ d\'application",
    'legal.h.services': '2. Description des services',
    'legal.h.kyc': "3. Inscription et vérification d\'identité (KYC)",
    'legal.h.usage': '4. Utilisation acceptable des services',
    'legal.h.limits': '5. Limites de transactions et frais',
    'legal.h.security': '6. Sécurité du compte',
    'legal.h.aml': '7. Conformité AML/LCB-FT',
    'legal.h.termination': '8. Suspension et résiliation',
    'legal.h.liability': '9. Limitation de responsabilité',
    'legal.h.law': '10. Droit applicable et juridiction',
    'legal.h.mentions': '11. Mentions légales',


    // ── PAGE TITLES ───────────────────────────────────────────────
    'page.title.login': 'APEXCARD — Connexion',
    'page.title.onboarding': 'APEXCARD — Ouvrir un compte',
    'page.title.app': 'APEXCARD — Dashboard',
    'page.title.admin': 'APEXCARD — Panneau Admin',
    'page.title.privacy': 'APEXCARD — Politique de confidentialité',
    'page.title.legal': 'APEXCARD — CGU',

    // ── ONBOARDING — Plan features ────────────────────────────────
    'onboarding.plan.starter.f1': 'Carte virtuelle',
    'onboarding.plan.starter.f2': 'Limite €500/mois',
    'onboarding.plan.starter.f3': 'App mobile',
    'onboarding.plan.starter.f4': 'Support email',
    'onboarding.plan.standard.f1': 'Carte physique Mastercard',
    'onboarding.plan.standard.f2': 'Limite €5,000/mois',
    'onboarding.plan.standard.f3': 'IBAN personnel',
    'onboarding.plan.standard.f4': 'Support prioritaire 24/7',
    'onboarding.plan.standard.f5': 'Cashback 1%',
    'onboarding.plan.premium.f1': 'Carte Gold Mastercard',
    'onboarding.plan.premium.f2': 'Limite illimitée',
    'onboarding.plan.premium.f3': 'Yield 24% sur solde',
    'onboarding.plan.premium.f4': 'Manager dédié',
    'onboarding.plan.premium.f5': 'Accès lounges aéroport',
    'onboarding.plan.premium.f6': 'Assurance voyage premium',
    'onboarding.s1.period': '/mois',

    // ── ONBOARDING — Form labels ──────────────────────────────────
    'onboarding.s2.firstname.placeholder': 'Jean',
    'onboarding.s2.lastname.placeholder': 'Dupont',
    'onboarding.s2.email.placeholder': 'jean@exemple.com',
    'onboarding.s2.password.placeholder': 'Minimum 8 caractères',
    'onboarding.s2.confirm_pwd.placeholder': 'Répétez votre mot de passe',
    'onboarding.s2.phone.placeholder': '6 12 34 56 78',
    'onboarding.s2.pwd.label': 'Entrez un mot de passe',
    'onboarding.s2.error.firstname': '⚠ Prénom requis',
    'onboarding.s2.error.lastname': '⚠ Nom requis',
    'onboarding.s2.error.email': "⚠ Format d'email invalide",
    'onboarding.s2.error.password': '⚠ Le mot de passe ne répond pas aux exigences',
    'onboarding.s2.error.confirm_pwd': '⚠ Les mots de passe ne correspondent pas',
    'onboarding.s2.error.phone': '⚠ Numéro de téléphone invalide',
    'onboarding.s2.creating': 'Création du compte…',

    // ── ONBOARDING — Profile step ─────────────────────────────────
    'onboarding.s4.birthdate.placeholder': 'JJ/MM/AAAA',
    'onboarding.s4.nationality.placeholder': 'Sélectionnez votre nationalité',
    'onboarding.s4.country.placeholder': 'Sélectionnez un pays',
    'onboarding.s4.profession.placeholder': 'Sélectionnez votre profession',
    'onboarding.s4.address1.placeholder': '12 rue de la Paix',
    'onboarding.s4.address2.placeholder': 'Appartement, bâtiment...',
    'onboarding.s4.city.placeholder': 'Paris',
    'onboarding.s4.postal.placeholder': '75001',
    'onboarding.s4.income.placeholder': 'Sélectionnez votre source de revenus',
    'onboarding.s4.error.birthdate': '⚠ Vous devez avoir 18 ans ou plus',
    'onboarding.s4.error.address1': '⚠ Adresse requise',
    'onboarding.s4.error.city': '⚠ Ville requise',
    'onboarding.s4.error.postal': '⚠ Code postal requis',
    'onboarding.s4.data_notice': "🔒 Vos données sont chiffrées AES-256 et ne sont jamais vendues à des tiers",

    // ── ONBOARDING — KYC sub-steps ────────────────────────────────
    'onboarding.kyc.sub.document': 'Document',
    'onboarding.kyc.sub.selfie': 'Selfie',
    'onboarding.kyc.sub.verification': 'Vérification',
    'onboarding.kyc.doc.passport': 'Passeport',
    'onboarding.kyc.doc.cni': "Carte d'identité",
    'onboarding.kyc.doc.license': 'Permis de conduire',
    'onboarding.kyc.upload.hint': 'Glissez votre document ici',
    'onboarding.kyc.upload.click': 'ou cliquez pour sélectionner',
    'onboarding.kyc.upload.formats': 'Formats acceptés : JPG, PNG, PDF · Max 10MB',
    'onboarding.kyc.upload.done_recto': '✅ Document recto reçu',
    'onboarding.kyc.upload.done_verso': '✅ Document verso reçu',
    'onboarding.kyc.selfie.ok': '✅ Selfie validé avec succès !',
    'onboarding.kyc.camera.label': 'Zone caméra simulée',
    'onboarding.kyc.camera.pos': 'Positionnez votre visage dans le cadre',
    'onboarding.kyc.tier_active': 'KYC Tier 1 activé · Compte pleinement opérationnel',
    'onboarding.kyc.verify.doc': 'Vérification document...',
    'onboarding.kyc.verify.face': 'Reconnaissance faciale...',
    'onboarding.kyc.verify.aml': 'Vérification listes AML/PEP...',
    'onboarding.kyc.verify.final': 'Validation finale...',
    'onboarding.kyc.selfie.instr1': '✅ Visage entier visible',
    'onboarding.kyc.selfie.instr2': '✅ Bonne luminosité',
    'onboarding.kyc.selfie.instr3': '✅ Document lisible',
    'onboarding.kyc.selfie.instr4': '❌ Pas de lunettes de soleil',

    // ── ONBOARDING — Card step ────────────────────────────────────
    'onboarding.s6.virtual.desc': 'Disponible immédiatement',
    'onboarding.s6.physical.desc': '+2-5 jours ouvrés',
    'onboarding.s6.preview_label': 'Aperçu en temps réel',
    'onboarding.s6.card_preview.holder': 'Titulaire',
    'onboarding.s6.holographic': 'Effet holographique simulé',
    'onboarding.s6.create_pin': 'Créer votre PIN',
    'onboarding.s6.confirm_pin': 'Confirmer votre PIN',
    'onboarding.s6.delivery': 'Adresse de livraison (depuis votre profil)',
    'onboarding.s6.delivery_time': '⏱ Estimation : 3-5 jours ouvrés',

    // ── ONBOARDING — Funding step ────────────────────────────────
    'onboarding.s7.amounts': 'Montants suggérés :',
    'onboarding.s7.deposit_address': 'Adresse de dépôt',
    'onboarding.s7.scan': 'Scannez pour envoyer',
    'onboarding.s7.min_fee': '✅ Minimum $10 · Frais 0% · Crédit immédiat',
    'onboarding.s7.sepa_beneficiary': 'Bénéficiaire',
    'onboarding.s7.sepa_ref': 'Référence',
    'onboarding.s7.sepa_note': '⏱ 1-2 jours ouvrés · Frais 0% · Montant minimum €10',
    'onboarding.s7.skip': 'Je rechargerai plus tard →',
    'onboarding.s7.copy_address': '📋 Copier',

    // ── ONBOARDING — Welcome step ────────────────────────────────
    'onboarding.s8.subtitle': "Votre compte est actif. Votre carte est en cours d'activation.",
    'onboarding.s8.plan_label': 'Plan souscrit',
    'onboarding.s8.holder_label': 'Titulaire',
    'onboarding.s8.email_label': 'Email',
    'onboarding.s8.kyc_label': 'KYC',
    'onboarding.s8.card_label': 'Carte',
    'onboarding.s8.kyc_value': '✅ Tier 1 Activé',
    'onboarding.s8.next1': 'Rechargez votre carte',
    'onboarding.s8.next2': 'Invitez un ami',
    'onboarding.s8.next3': 'Découvrez le dashboard',
    'onboarding.s8.go_dashboard': 'Accéder à mon dashboard →',
    'onboarding.s8.download_apple': "Télécharger sur l'",
    'onboarding.s8.app_store': 'App Store',
    'onboarding.s8.download_google': 'Disponible sur',
    'onboarding.s8.google_play': 'Google Play',
    'onboarding.s8.security': '🔒 Connexion sécurisée SSL/TLS · AES-256 · ISO 27001 · PCI DSS Level 1',

    // ── APP-USER — Dashboard ──────────────────────────────────────
    'app.dashboard.change': '↑ +12.4% &nbsp; +$3,301.25 ce mois',
    'app.dashboard.crypto_holdings': 'Crypto Holdings',
    'app.dashboard.portfolio_alloc': 'Répartition du portefeuille',
    'app.dashboard.recent_tx': 'Transactions récentes',
    'app.dashboard.view_all': 'Voir tout →',
    'app.dashboard.assets_count': '4 actifs',

    // ── APP-USER — Wallet ─────────────────────────────────────────
    'app.wallet.all_assets': 'Tous les actifs',
    'app.wallet.th.asset': 'Actif',
    'app.wallet.th.balance': 'Solde',
    'app.wallet.th.price': 'Prix',
    'app.wallet.th.change': '24h',
    'app.wallet.th.value': 'Valeur',
    'app.wallet.th.actions': 'Actions',
    'app.wallet.btn.deposit': '↓ Déposer',
    'app.wallet.btn.withdraw': '↑ Retirer',

    // ── APP-USER — Swap ───────────────────────────────────────────
    'app.swap.you_pay': 'Vous payez',
    'app.swap.you_receive': 'Vous recevez',
    'app.swap.price_impact': 'Impact prix',
    'app.swap.balance': 'Solde',

    // ── APP-USER — IBAN ───────────────────────────────────────────
    'app.iban.recent_tx': 'Transactions bancaires récentes',
    'app.iban.th.desc': 'Description',
    'app.iban.th.iban': 'IBAN',
    'app.iban.th.date': 'Date',
    'app.iban.th.amount': 'Montant',
    'app.iban.wire_transfer': '↑ Virement',
    'app.iban.rib': '📄 RIB',
    'app.iban.copy_iban': '📋 Copier IBAN',
    'app.iban.download_rib': '📥 Télécharger RIB',

    // ── APP-USER — Yield ──────────────────────────────────────────
    'app.yield.current_apy': 'APY actuel',
    'app.yield.apy_full': 'Rendement annuel en pourcentage',
    'app.yield.active_pools': 'Pools actifs',
    'app.yield.simulator': 'Simulateur de gains',
    'app.yield.invest_amount': 'Montant investi',
    'app.yield.at_apy': 'à 24% APY',
    'app.yield.monthly_sim': 'Mensuel',
    'app.yield.annual_sim': 'Annuel',
    'app.yield.stake_now': 'Staker maintenant',

    // ── APP-USER — Affiliate ──────────────────────────────────────
    'app.affiliate.your_code': 'Votre code de parrainage',
    'app.affiliate.total_referrals': 'Total parrainages',
    'app.affiliate.total_earned': 'Total gagné',
    'app.affiliate.active_count': 'Parrainages actifs',
    'app.affiliate.commission_rate': 'Taux de commission',
    'app.affiliate.commission_struct': 'Structure de commission',
    'app.affiliate.copy_link': '📋 Copier le lien',

    // ── APP-USER — KYC ────────────────────────────────────────────
    'app.kyc.tier2_verified': 'KYC Tier 2 — Vérifié',
    'app.kyc.tier2_desc': 'Votre identité a été vérifiée. Vous pouvez accéder à toutes les fonctionnalités Tier 2.',
    'app.kyc.submitted_docs': 'Documents soumis',
    'app.kyc.tier.enhanced': 'Amélioré',
    'app.kyc.upgrade': 'Améliorer →',
    'app.kyc.completed': '✓ Complété',
    'app.kyc.active': '✓ Actif',

    // ── APP-USER — Settings ───────────────────────────────────────
    'app.settings.save': 'Enregistrer',
    'app.settings.change_pwd': 'Changer de mot de passe',
    'app.settings.email.label': 'Email',
    'app.settings.email.readonly': '(lecture seule)',
    'app.settings.referral': 'Parrainage',
    'app.settings.referral_code': 'Votre code de parrainage',
    'app.settings.referral_link': 'Lien de parrainage',
    'app.settings.yield_reports': 'Rapports Yield',
    'app.settings.yield_reports.desc': 'Récapitulatif mensuel des gains',
    'app.settings.new_card': '+ Nouvelle carte',
    'app.cards.monthly_limit': 'Limite mensuelle',
    'app.cards.topup': '💳 Recharger la carte',
    'app.cards.expires': 'EXPIRE',

    // ── APP-ADMIN — Tables headers ────────────────────────────────
    'admin.users.filter.all_tiers': 'Tous tiers',
    'admin.users.filter.all_status': 'Tous statuts',
    'admin.tx.filter.all_types': 'Tous types',
    'admin.tx.filter.all_status': 'Tous statuts',
    'admin.logins.filter.all': 'Toutes',
    'admin.logins.filter.success': '✅ Réussies',
    'admin.logins.filter.fail': '❌ Échouées',
    'admin.audit.filter.all': 'Toutes les actions',
    'admin.audit.count': '— entrées',

    // ── APP-ADMIN — Affiliates section ────────────────────────────
    'admin.affiliate.kpi.active_sub': '+23 ce mois',
    'admin.affiliate.kpi.pending_sub': 'Mars 2026',
    'admin.affiliate.kpi.volume_sub': 'Réseau total actif',
    'admin.affiliate.batch_btn': '💸 Paiement batch',

    // ── APP-ADMIN — Yield section ─────────────────────────────────
    'admin.yield.kpi.managed_sub': '6 investisseurs',
    'admin.yield.kpi.monthly_sub': 'APY 24% — Mars 2026',
    'admin.yield.kpi.total_sub': 'Depuis ouverture',
    'admin.yield.payout_btn': '📤 Versement mensuel',

    // ── APP-ADMIN — Finances ──────────────────────────────────────
    'admin.finances.revenue': 'Revenus',
    'admin.finances.costs': 'Coûts',
    'admin.finances.net_margin': 'Marge nette Mars 2026',
    'admin.finances.f_card_sales': 'Ventes cartes',
    'admin.finances.f_topup_fees': 'Frais recharge (3.5%)',
    'admin.finances.f_swap_fees': 'Frais swap (0.25%)',
    'admin.finances.c_bin': 'Frais BIN Wallester',
    'admin.finances.c_physical': 'Coût cartes physiques',
    'admin.finances.c_yield': 'Yield investisseurs',
    'admin.finances.c_affiliate': 'Commissions affiliés',

    // ── APP-ADMIN — Settings ──────────────────────────────────────
    'admin.settings.fees_title': '💲 Frais & Prix',
    'admin.settings.affiliate_title': '🤝 Commissions affiliés',
    'admin.settings.limits_title': '🎚️ Limites par tier',
    'admin.settings.api_title': '🔌 API Status',
    'admin.settings.system_title': '🛡️ Système',
    'admin.settings.maintenance.desc': "Bloquer l'accès utilisateurs et afficher une page de maintenance",
    'admin.settings.maintenance.title': 'Mode maintenance',
    'admin.audit.sub': 'Actions administratives et événements de sécurité',
    'admin.logins.sub': 'Historique des authentifications et tentatives suspectes',
    'admin.kyc.count_badge': '12 dossiers',
    'admin.cards.badge': '10 cartes',

    // Shared footer links
    'footer.home': 'Accueil',
    'footer.privacy': 'Confidentialité',
    'footer.legal': 'CGU',
  },

  en: {
    // ── GLOBAL / SHARED ──────────────────────────────────────────
    'nav.features': 'Features',
    'nav.security': 'Security',
    'nav.affiliate': 'Referrals',
    'nav.yield': 'Yield',
    'nav.pricing': 'Pricing',
    'nav.login': 'Sign in',
    'nav.open_account': 'Open an account',
    'nav.back_home': '← Back to home',
    'footer.rights': '© 2026 APEXCARD Financial SAS. All rights reserved.',
    'footer.col.product': 'Product',
    'footer.col.company': 'Company',
    'footer.col.support': 'Support',
    'footer.col.legal': 'Legal',
    'footer.tagline': 'The next-generation financial platform. Crypto, personal IBAN, physical card — all in one.',

    // ── INDEX ─────────────────────────────────────────────────────
    'index.badge': '🌍 Available in 180+ countries',
    'index.hero.title1': 'Banking',
    'index.hero.title2': 'without borders.',
    'index.hero.sub': 'The first financial platform combining crypto, personal IBAN, and a physical card — without compromise.',
    'index.hero.cta_main': 'Open my free account',
    'index.hero.cta_demo': 'Watch the demo',
    'index.social_proof': 'Already <strong>3,847</strong> clients in <strong>47</strong> countries',
    'index.fs1.label': 'Portfolio',
    'index.fs1.change': '▲ +4.2% today',
    'index.fs2.label': 'BTC Balance',
    'index.fs3.label': 'Accrued yield',
    'index.fs3.change': '24% APY',
    'index.fs4.label': 'Transactions',
    'index.fs4.change': 'this month',

    // Stats
    'index.stat0.label': 'Active clients',
    'index.stat0.sub': 'across 47 countries',
    'index.stat1.label': 'Countries supported',
    'index.stat1.sub': 'global coverage',
    'index.stat2.label': 'Volume processed',
    'index.stat2.sub': 'this month',
    'index.stat3.label': 'Yield APY',
    'index.stat3.sub': 'annual return',

    // Features
    'index.features.tag': 'Features',
    'index.features.title': 'Everything you need',
    'index.features.sub': 'One platform. Zero compromise.',
    'index.card.title': 'Your card. Everywhere in the world.',
    'index.card.desc': 'Physical and virtual card accepted in 180+ countries. Contactless payments, ATM withdrawals, zero hidden fees.',
    'index.iban.title': 'Your IBAN in your name',
    'index.iban.sub': 'EUR, GBP, USD accounts',
    'index.swap.title': 'Convert in seconds',
    'index.yield_card.title': 'Put your money to work',
    'index.yield_card.desc': 'Deposit your stablecoins and watch your balance grow.',
    'index.yield_card.label': 'Simulate your monthly yield',
    'index.kyc.title': 'Verified in 3 min',
    'index.kyc.step1': 'Email & phone',
    'index.kyc.step1.status': 'Done',
    'index.kyc.step2': 'Identity document',
    'index.kyc.step2.status': 'Verified',
    'index.kyc.step3': 'Selfie liveness',
    'index.kyc.step3.status': 'In progress',
    'index.security_card.title': 'Bank-grade security',

    // Security section
    'index.security.tag': 'Security',
    'index.security.title': 'Protected at every step',
    'index.security.sub': 'Your funds and data are protected by institutional-grade banking security standards.',
    'index.security.feat1.title': 'AES-256 + TLS 1.3 Encryption',
    'index.security.feat1.desc': 'All communications are end-to-end encrypted. Your data never leaves our secure servers.',
    'index.security.feat2.title': 'Real-time AI fraud detection',
    'index.security.feat2.desc': 'Our AI model analyzes every transaction and blocks suspicious activity before it happens.',
    'index.security.feat3.title': 'Segregated & insured funds',
    'index.security.feat3.desc': 'Your funds are held separately in segregated accounts, insured up to €100,000.',

    // Affiliate
    'index.affiliate.tag': 'Referral Program',
    'index.affiliate.title': 'Earn while you sleep',
    'index.affiliate.sub': 'Invite your friends and earn commissions across 3 tiers. The bigger your network, the more you earn.',
    'index.affiliate.l1.title': 'Direct referrals',
    'index.affiliate.l1.desc': "Commissions on your direct referrals\' transactions",
    'index.affiliate.l2.title': 'Referrals of referrals',
    'index.affiliate.l2.desc': 'Commissions on second-tier transactions',
    'index.affiliate.l3.title': '3rd tier',
    'index.affiliate.l3.desc': 'Passive commissions on third-tier network activity',

    // Yield section
    'index.yield.tag': 'Yield',
    'index.yield.title': 'Your money never sleeps',
    'index.yield.apy_label': 'APY on stablecoins (USDT, USDC)',
    'index.yield.sim_title': 'Calculate your annual return',
    'index.yield.monthly_label': 'Estimated monthly earnings',
    'index.yield.annual_label': 'Estimated annual earnings',
    'index.yield.cta': 'Start earning yield',

    // Live feed
    'index.live.label': 'Live activity',

    // Pricing
    'index.pricing.tag': 'Pricing',
    'index.pricing.title': 'Simple. Transparent. Honest.',
    'index.pricing.sub': 'Choose the plan that fits you. Switch anytime.',
    'index.pricing.starter': 'Starter',
    'index.pricing.starter.price': 'Free',
    'index.pricing.starter.period': 'Forever',
    'index.pricing.starter.cta': 'Get started free',
    'index.pricing.standard': 'Standard',
    'index.pricing.standard.period': 'per month · no commitment',
    'index.pricing.standard.cta': 'Open a Standard account',
    'index.pricing.premium': 'Premium',
    'index.pricing.premium.period': 'per month · billed annually',
    'index.pricing.premium.cta': 'Go Premium',
    'index.pricing.popular': '⭐ Most popular',
    'index.pricing.f.virtual_card': 'Virtual Mastercard',
    'index.pricing.f.iban_eur': 'Personal IBAN (EUR)',
    'index.pricing.f.limit_500': '€500/month limit',
    'index.pricing.f.kyc0': 'KYC Tier 0',
    'index.pricing.f.swap_basic': 'Basic crypto swap',
    'index.pricing.f.support_email': 'Email support',
    'index.pricing.f.phys_card': 'Physical Mastercard Gold',
    'index.pricing.f.iban_multi': 'IBAN EUR + GBP + USD',
    'index.pricing.f.limit_5k': '€5,000/month limit',
    'index.pricing.f.kyc12': 'KYC Tier 1 & 2',
    'index.pricing.f.swap_unlimited': 'Unlimited swaps (0.1% spread)',
    'index.pricing.f.apple_google': 'Apple Pay & Google Pay',
    'index.pricing.f.support_chat': 'Priority chat support',
    'index.pricing.f.gold_card': 'Engraved Metal Gold Card',
    'index.pricing.f.unlimited': 'Unlimited spending',
    'index.pricing.f.kyc3': 'KYC Tier 3 (business)',
    'index.pricing.f.yield': '24% APY Yield included',
    'index.pricing.f.manager': 'Dedicated account manager',
    'index.pricing.f.api': 'Direct API access',
    'index.pricing.f.sla': '99.99% uptime SLA',

    // FAQ
    'index.faq.tag': 'FAQ',
    'index.faq.title': 'Frequently asked questions',
    'index.faq.q1': 'How do I open an APEXCARD account?',
    'index.faq.a1': 'Opening an account takes less than 5 minutes. All you need is an email address, a phone number, and a valid ID. Our KYC is entirely digital — no mail, no appointments.',
    'index.faq.q2': 'How does the yield program work?',
    'index.faq.a2': 'Deposit stablecoins (USDT, USDC) into your APEXCARD wallet and earn up to 24% APY. Interest is distributed daily and can be withdrawn at any time with no fees.',
    'index.faq.q3': 'Are my funds safe?',
    'index.faq.a3': 'Yes. Your fiat funds are segregated and insured up to €100,000. Your crypto is stored using a multi-sig cold/hot wallet solution. We are regulated and compliant with European EMD2 requirements.',
    'index.faq.q4': 'What are the crypto conversion fees?',
    'index.faq.a4': 'The spread is only 0.1% on major pairs (BTC, ETH, SOL, USDT). No hidden fixed fees. Premium users benefit from a 0.05% spread.',
    'index.faq.q5': 'Can I use the card abroad?',
    'index.faq.a5': 'Absolutely. Your APEXCARD is accepted in 180+ countries via the Mastercard network. ATM withdrawals are charged at 1% (free for Premium accounts). The exchange rate applied is the interbank market rate.',

    // CTA
    'index.cta.title': 'Ready to join<br><span class="gradient-text">the financial revolution?</span>',
    'index.cta.sub': '3,847 people have already taken the leap. Your turn.',
    'index.cta.btn': 'Create my free account',

    // ── LOGIN ─────────────────────────────────────────────────────
    'login.tagline': 'Banking without borders',
    'login.role.label': 'Choose your role',
    'login.role.client': 'Client',
    'login.role.client.desc': 'Personal account',
    'login.role.admin': 'Admin',
    'login.role.admin.desc': 'Management panel',
    'login.email.label': 'Email address',
    'login.email.placeholder': 'you@apexcard.io',
    'login.pwd.label': 'Password',
    'login.btn': 'Sign in to APEXCARD',
    'login.divider': 'or quick access',
    'login.demo_client': '⚡ Demo Client',
    'login.demo_admin': '⚡ Demo Admin',
    'login.timeout': '🔒 Your session expired due to inactivity. Please sign in again.',
    'login.error.credentials': 'Invalid credentials. Please check your email and password.',
    'login.error.empty': 'Please enter your email and password.',
    'login.error.generic': 'An error occurred. Please try again.',
    'login.authenticating': 'Authenticating…',
    'login.lockout': 'Too many failed attempts. Please wait {n} minute{s} before trying again.',

    // ── ONBOARDING ────────────────────────────────────────────────
    'onboarding.title': 'Open an account',
    'onboarding.existing': 'Already a member?',
    'onboarding.step.plan': 'Plan',
    'onboarding.step.account': 'Account',
    'onboarding.step.email': 'Email',
    'onboarding.step.profile': 'Profile',
    'onboarding.step.kyc': 'KYC',
    'onboarding.step.card': 'Card',
    'onboarding.step.topup': 'Top up',
    'onboarding.step.welcome': 'Welcome',

    // Step 1 - Plan
    'onboarding.s1.tag': 'Step 1 of 8',
    'onboarding.s1.title': 'Choose your plan',
    'onboarding.s1.sub': 'Start for free or unlock all features right away',
    'onboarding.plan.starter': 'Starter',
    'onboarding.plan.starter.price': 'Free',
    'onboarding.plan.standard': 'Standard',
    'onboarding.plan.premium': 'Premium',
    'onboarding.plan.cta': 'Choose this plan',
    'onboarding.plan.popular': '⭐ Most popular',
    'onboarding.plan.note': '🔄 Switch plans anytime · No commitment · Cancel in 1 click',

    // Step 2 - Account
    'onboarding.s2.tag': 'Step 2 of 8',
    'onboarding.s2.title': 'Create your account',
    'onboarding.s2.sub': 'Your secure login credentials',
    'onboarding.s2.firstname': 'First name',
    'onboarding.s2.lastname': 'Last name',
    'onboarding.s2.email': 'Email address',
    'onboarding.s2.password': 'Password',
    'onboarding.s2.confirm_pwd': 'Confirm password',
    'onboarding.s2.phone': 'Phone number',
    'onboarding.s2.pwd.length': '8+ characters',
    'onboarding.s2.pwd.upper': 'Uppercase letter',
    'onboarding.s2.pwd.number': 'Number',
    'onboarding.s2.pwd.special': 'Special character',
    'onboarding.s2.cgu': `J'accepte les <a href="#">Conditions Générales d'Utilisation</a> et la <a href="#">Politique de confidentialité</a>`,
    'onboarding.s2.age': 'I confirm I am 18 years of age or older',
    'onboarding.btn.back': '← Back',
    'onboarding.btn.continue': 'Continue →',

    // Step 3 - Email verification
    'onboarding.s3.tag': 'Step 3 of 8',
    'onboarding.s3.title': 'Email verification',
    'onboarding.s3.sub': 'Confirm your address to secure your account',
    'onboarding.s3.sent': 'Verification code sent',
    'onboarding.s3.hint': 'We sent a code to',
    'onboarding.s3.enter': 'Enter the 6-digit code',
    'onboarding.s3.resend_timer': 'Resend code in',
    'onboarding.s3.resend_btn': 'Resend code',
    'onboarding.s3.success': 'Email successfully verified!',
    'onboarding.s3.redirect': 'Redirecting...',

    // Step 4 - Profile
    'onboarding.s4.tag': 'Step 4 of 8',
    'onboarding.s4.title': 'Personal information',
    'onboarding.s4.sub': 'For your security and regulatory compliance',
    'onboarding.s4.birthdate': 'Date of birth',
    'onboarding.s4.nationality': 'Nationality',
    'onboarding.s4.country': 'Country of residence',
    'onboarding.s4.profession': 'Occupation',
    'onboarding.s4.address1': 'Address line 1',
    'onboarding.s4.address2': 'Address line 2',
    'onboarding.s4.address2.optional': '(optional)',
    'onboarding.s4.city': 'City',
    'onboarding.s4.postal': 'Postal code',
    'onboarding.s4.income': 'Source of income',

    // Step 5 - KYC
    'onboarding.s5.tag': 'Step 5 of 8',
    'onboarding.s5.title': 'Identity verification',
    'onboarding.s5.sub': 'Regulatory KYC — secure and confidential',
    'onboarding.s5.doc_title': 'Choose your identity document',
    'onboarding.s5.formats': 'Accepted formats: JPG, PNG, PDF · Max 10MB',
    'onboarding.s5.selfie.title': 'Verification selfie',
    'onboarding.s5.selfie.sub': 'Take a selfie while holding your identity document in view',
    'onboarding.s5.selfie.btn': '📸 Take selfie',
    'onboarding.s5.verifying.title': 'Verification in progress',
    'onboarding.s5.verifying.sub': 'Please wait a moment...',
    'onboarding.s5.verified': '✅ Identity verified',

    // Step 6 - Card
    'onboarding.s6.tag': 'Step 6 of 8',
    'onboarding.s6.title': 'Set up your card',
    'onboarding.s6.sub': 'Customize your APEXCARD',
    'onboarding.s6.card_type': 'Card type',
    'onboarding.s6.virtual': 'Virtual Card',
    'onboarding.s6.physical': 'Physical Card',
    'onboarding.s6.customize': 'Customization',
    'onboarding.s6.name_on_card': 'Name on card',
    'onboarding.s6.currency': 'Primary currency',
    'onboarding.s6.limit': 'Per-transaction limit:',
    'onboarding.s6.pin': 'PIN code (4 digits)',

    // Step 7 - Top up
    'onboarding.s7.tag': 'Step 7 of 8',
    'onboarding.s7.title': 'Fund your card',
    'onboarding.s7.sub': 'Start using your APEXCARD right away',
    'onboarding.s7.crypto': '🪙 Crypto',
    'onboarding.s7.sepa': '🏦 SEPA Transfer',

    // Step 8 - Welcome
    'onboarding.s8.tag': 'Step 8 of 8',
    'onboarding.s8.title': 'Welcome!',

    // ── APP USER ──────────────────────────────────────────────────
    'app.section.main': 'Main',
    'app.section.banking': 'Banking',
    'app.section.account': 'Account',
    'app.nav.dashboard': 'Dashboard',
    'app.nav.cards': 'My Cards',
    'app.nav.wallet': 'Crypto Wallet',
    'app.nav.swap': 'Swap',
    'app.nav.iban': 'IBAN Accounts',
    'app.nav.yield': 'Yield & Staking',
    'app.nav.affiliate': 'Referral Program',
    'app.nav.kyc': 'KYC Verification',
    'app.nav.settings': 'Settings',
    'app.logout': 'Sign out',

    // Dashboard
    'app.dashboard.title': 'Dashboard',
    'app.dashboard.welcome': 'Welcome back 👋',
    'app.dashboard.balance_label': 'Total Portfolio Value',
    'app.dashboard.change': '↑ +12.4% &nbsp; +$3,301.25 this month',
    'app.dashboard.send': '↑ Send',
    'app.dashboard.receive': '↓ Receive',
    'app.dashboard.topup': '+ Top up',

    // Cards page
    'app.cards.title': 'My Cards',
    'app.cards.sub': '2 active cards',
    'app.cards.online': 'Online Payments',
    'app.cards.contactless': 'Contactless',
    'app.cards.international': 'International',
    'app.cards.atm': 'ATM Withdrawals',

    // Wallet
    'app.wallet.title': 'Crypto Wallet',
    'app.wallet.sub': 'Multi-chain holdings',

    // Swap
    'app.swap.title': 'Swap',
    'app.swap.sub': 'DeFi-powered exchange',
    'app.swap.rate': 'Rate',
    'app.swap.fee': 'Network fee',
    'app.swap.min': 'Minimum received',
    'app.swap.confirm': 'Confirm Swap ⇄',

    // IBAN
    'app.iban.title': 'IBAN Accounts',
    'app.iban.sub': 'Multi-currency banking',
    'app.iban.copy': '📋 Copy IBAN',
    'app.iban.download': '📥 Download details',

    // Yield
    'app.yield.title': 'Yield & Staking',
    'app.yield.sub': 'Earn passive income on your crypto',
    'app.yield.staked': 'Total Staked',
    'app.yield.monthly': 'Monthly Earnings',

    // Affiliate
    'app.affiliate.title': 'Referral Program',
    'app.affiliate.sub': 'Earn by referring friends',
    'app.affiliate.copy': '📋 Copy link',

    // KYC
    'app.kyc.title': 'KYC Verification',
    'app.kyc.sub': 'Identity verification status',
    'app.kyc.email': 'Email',
    'app.kyc.phone': 'Phone',
    'app.kyc.identity': 'Identity',
    'app.kyc.address': 'Address',

    // Settings
    'app.settings.title': 'Settings',
    'app.settings.sub': 'Manage your account',
    'app.settings.profile': 'Profile Information',
    'app.settings.security': 'Security',
    'app.settings.2fa': 'Two-Factor Authentication',
    'app.settings.2fa.desc': 'Protect your account with 2FA',
    'app.settings.login_notif': 'Login Notifications',
    'app.settings.login_notif.desc': 'Email alert on new logins',
    'app.settings.biometric': 'Biometric Login',
    'app.settings.biometric.desc': 'Use Face ID / fingerprint',
    'app.settings.notifications': 'Notifications',
    'app.settings.tx_alerts': 'Transaction Alerts',
    'app.settings.tx_alerts.desc': 'Notify on every transaction',
    'app.settings.price_alerts': 'Price Alerts',
    'app.settings.price_alerts.desc': 'Crypto price movement alerts',
    'app.settings.firstname.placeholder': 'First Name',
    'app.settings.lastname.placeholder': 'Last Name',
    'app.settings.phone.placeholder': '+1 ...',
    'app.settings.newpwd.placeholder': 'New password (min. 6 chars)',

    // Modals
    'modal.send.title': 'Send Funds',
    'modal.receive.title': 'Receive Crypto',
    'modal.topup.title': 'Top Up',
    'modal.deposit.title': 'Deposit Crypto',
    'modal.withdraw.title': 'Send Crypto',
    'modal.wire.title': 'Bank Transfer',
    'modal.stake.title': 'Stake Crypto',
    'modal.kyc.title': 'Upload KYC Document',
    'modal.card_order.title': 'Order a New Card',
    'modal.card_topup.title': 'Top Up Card',
    'modal.crypto_withdraw.title': 'Withdraw Crypto',

    // Toast messages
    'toast.swap_success': '✅ Swap executed successfully!',
    'toast.swap_demo': '✅ Swap executed (demo mode)!',
    'toast.swap_tokens': 'Tokens swapped!',
    'toast.swap_invalid': '⚠️ Enter a valid amount',
    'toast.not_auth': '⚠️ Not authenticated',
    'toast.fill_fields': '⚠️ Fill all fields',
    'toast.card_ordered': '✅ Card ordered successfully!',
    'toast.card_demo': '✅ Card order placed (demo)!',
    'toast.withdraw_submitted': '✅ Withdrawal submitted!',
    'toast.withdraw_demo': '✅ Withdrawal submitted (demo)!',
    'toast.wire_sent': '✅ Transfer sent!',
    'toast.wire_demo': '✅ Transfer processed (demo)!',
    'toast.rib_download': '📄 RIB downloaded (demo)!',
    'toast.details_download': '📄 Details downloaded (demo)!',
    'toast.code_copied': '✅ Code copied!',
    'toast.iban_copied': '✅ IBAN copied!',
    'toast.setting_on': '✅ Enabled',
    'toast.setting_off': '✅ Disabled',
    'toast.setting_updated': '✅ Setting updated (demo)!',
    'toast.profile_saved': '✅ Profile saved!',
    'toast.profile_demo': '✅ Profile updated (demo)!',

    // ── APP ADMIN ─────────────────────────────────────────────────
    'admin.nav.overview': 'Overview',
    'admin.nav.users': 'Users',
    'admin.nav.cards': 'Cards',
    'admin.nav.transactions': 'Transactions',
    'admin.nav.kyc': 'KYC Pending',
    'admin.nav.affiliates': 'Affiliates',
    'admin.nav.yield': 'Yield',
    'admin.nav.finances': 'Finances P&L',
    'admin.nav.audit': 'Audit Log',
    'admin.nav.logins': 'Login History',
    'admin.nav.settings': 'System Settings',
    'admin.logout': 'Sign out',

    'admin.kpi.users': 'Users',
    'admin.kpi.cards': 'Active cards',
    'admin.kpi.volume': 'Volume 30d',
    'admin.kpi.revenue': 'Revenue',
    'admin.kpi.yield': 'Managed yield',
    'admin.kpi.affiliates': 'Active affiliates',
    'admin.kpi.kyc_pending': 'KYC Pending',

    'admin.chart.revenue': 'Revenue 12 months ($)',
    'admin.chart.tx': 'Transactions / day',
    'admin.alerts.title': '⚠️ System alerts',
    'admin.top_users.title': '🏆 Top 5 users by volume',

    'admin.users.search': '🔍 Search by name, email, ID...',
    'admin.users.th.id': 'ID',
    'admin.users.th.name': 'Name',
    'admin.users.th.email': 'Email',
    'admin.users.th.tier': 'KYC Tier',
    'admin.users.th.cards': 'Cards',
    'admin.users.th.balance': 'Balance',
    'admin.users.th.volume': 'Volume 30d',
    'admin.users.th.date': 'Date',
    'admin.users.th.status': 'Status',

    'admin.cards.title': '💳 Issued cards',
    'admin.cards.th.id': 'ID',
    'admin.cards.th.user': 'User',
    'admin.cards.th.type': 'Type',
    'admin.cards.th.number': 'Number',
    'admin.cards.th.status': 'Status',
    'admin.cards.th.balance': 'Balance',
    'admin.cards.th.limit': 'Limit',
    'admin.cards.th.last_tx': 'Last tx',
    'admin.cards.th.action': 'Action',

    'admin.tx.th.id': 'ID',
    'admin.tx.th.user': 'User',
    'admin.tx.th.type': 'Type',
    'admin.tx.th.amount': 'Amount',
    'admin.tx.th.currency': 'Currency',
    'admin.tx.th.status': 'Status',
    'admin.tx.th.date': 'Date',

    'admin.kyc.title': '🪪 Pending KYC dossiers',
    'admin.kyc.none': '✅ No pending KYC dossiers',
    'admin.kyc.approve': '✅ KYC approved — user notified',
    'admin.kyc.reject': '❌ KYC rejected',

    'admin.affiliate.kpi.active': 'Active affiliates',
    'admin.affiliate.kpi.pending': 'Pending commissions',
    'admin.affiliate.kpi.volume': 'Network volume',
    'admin.affiliate.top.title': 'Top affiliates',
    'admin.affiliate.th.affiliate': 'Affiliate',
    'admin.affiliate.th.referrals': 'Referrals',
    'admin.affiliate.th.volume': 'Network volume',
    'admin.affiliate.th.commissions': 'Commissions',
    'admin.affiliate.th.level': 'Tier',
    'admin.affiliate.th.status': 'Status',

    'admin.yield.kpi.managed': 'Managed capital',
    'admin.yield.kpi.monthly': 'Due this month',
    'admin.yield.kpi.total': 'Total paid out',
    'admin.yield.investors.title': 'Investors',
    'admin.yield.th.investor': 'Investor',
    'admin.yield.th.amount': 'Amount',
    'admin.yield.th.round': 'Round',
    'admin.yield.th.apy': 'APY',
    'admin.yield.th.earned': 'Total earned',
    'admin.yield.th.next': 'Next payout',
    'admin.yield.th.status': 'Status',

    'admin.finances.pnl': '📊 P&L — March 2026',
    'admin.finances.revenue_split': 'Revenue breakdown',
    'admin.finances.float': 'Float providers',

    'admin.audit.title': '🛡️ Audit Log',
    'admin.audit.sub': 'Administrative actions and security events',
    'admin.audit.th.date': 'Date',
    'admin.audit.th.action': 'Action',
    'admin.audit.th.operator': 'Operator',
    'admin.audit.th.details': 'Details',
    'admin.audit.th.ip': 'IP',

    'admin.logins.title': '🔐 Login attempts',
    'admin.logins.sub': 'Authentication history and suspicious attempt log',
    'admin.logins.th.date': 'Date',
    'admin.logins.th.email': 'Email',
    'admin.logins.th.status': 'Status',
    'admin.logins.th.ip': 'IP',
    'admin.logins.th.device': 'Device',

    'admin.settings.title': 'System Settings',
    'admin.settings.maintenance': 'Maintenance mode',

    'admin.toast.suspicious': '🚨 Suspicious transaction: $',
    'admin.toast.new_user': '🆕 New user: ',
    'admin.toast.card_blocked': 'Card blocked',

    // ── PRIVACY ───────────────────────────────────────────────────
    'privacy.title': 'Privacy Policy',
    'privacy.badge': '🔒 GDPR Compliant — Last updated: March 2026',
    'privacy.sub': 'We take the protection of your personal data very seriously. This document explains how APEXCARD collects, uses, and protects your data.',
    'privacy.toc.title': 'Table of contents',
    'privacy.h.controller': '1. Data controller',
    'privacy.h.data': '2. Personal data collected',
    'privacy.h.purposes': '3. Processing purposes and legal bases',
    'privacy.h.retention': '4. Retention period',
    'privacy.h.rights': '5. Your rights',
    'privacy.h.security': '6. Data security',
    'privacy.h.transfers': '7. International transfers',
    'privacy.h.cookies': '8. Cookies and trackers',
    'privacy.h.contact': '9. Contact & DPO',
    'privacy.h.changes': '10. Changes to this policy',

    // ── LEGAL ─────────────────────────────────────────────────────
    'legal.title': 'Terms & Conditions',
    'legal.badge': '📋 Version 2.0 — March 2026',
    'legal.sub': 'These Terms & Conditions govern access to and use of APEXCARD services. By registering, you unconditionally accept these terms.',
    'legal.h.scope': '1. Scope and subject matter',
    'legal.h.services': '2. Description of services',
    'legal.h.kyc': '3. Registration and identity verification (KYC)',
    'legal.h.usage': '4. Acceptable use of services',
    'legal.h.limits': '5. Transaction limits and fees',
    'legal.h.security': '6. Account security',
    'legal.h.aml': '7. AML/KYC compliance',
    'legal.h.termination': '8. Suspension and termination',
    'legal.h.liability': '9. Limitation of liability',
    'legal.h.law': '10. Governing law and jurisdiction',
    'legal.h.mentions': '11. Legal notices',


    // ── PAGE TITLES ───────────────────────────────────────────────
    'page.title.login': 'APEXCARD — Connexion',
    'page.title.onboarding': 'APEXCARD — Ouvrir un compte',
    'page.title.app': 'APEXCARD — Dashboard',
    'page.title.admin': 'APEXCARD — Panneau Admin',
    'page.title.privacy': 'APEXCARD — Politique de confidentialité',
    'page.title.legal': 'APEXCARD — CGU',

    // ── ONBOARDING — Plan features ────────────────────────────────
    'onboarding.plan.starter.f1': 'Carte virtuelle',
    'onboarding.plan.starter.f2': 'Limite €500/mois',
    'onboarding.plan.starter.f3': 'App mobile',
    'onboarding.plan.starter.f4': 'Support email',
    'onboarding.plan.standard.f1': 'Carte physique Mastercard',
    'onboarding.plan.standard.f2': 'Limite €5,000/mois',
    'onboarding.plan.standard.f3': 'IBAN personnel',
    'onboarding.plan.standard.f4': 'Support prioritaire 24/7',
    'onboarding.plan.standard.f5': 'Cashback 1%',
    'onboarding.plan.premium.f1': 'Carte Gold Mastercard',
    'onboarding.plan.premium.f2': 'Limite illimitée',
    'onboarding.plan.premium.f3': 'Yield 24% sur solde',
    'onboarding.plan.premium.f4': 'Manager dédié',
    'onboarding.plan.premium.f5': 'Accès lounges aéroport',
    'onboarding.plan.premium.f6': 'Assurance voyage premium',
    'onboarding.s1.period': '/mois',

    // ── ONBOARDING — Form labels ──────────────────────────────────
    'onboarding.s2.firstname.placeholder': 'Jean',
    'onboarding.s2.lastname.placeholder': 'Dupont',
    'onboarding.s2.email.placeholder': 'jean@exemple.com',
    'onboarding.s2.password.placeholder': 'Minimum 8 caractères',
    'onboarding.s2.confirm_pwd.placeholder': 'Répétez votre mot de passe',
    'onboarding.s2.phone.placeholder': '6 12 34 56 78',
    'onboarding.s2.pwd.label': 'Entrez un mot de passe',
    'onboarding.s2.error.firstname': '⚠ Prénom requis',
    'onboarding.s2.error.lastname': '⚠ Nom requis',
    'onboarding.s2.error.email': "⚠ Format d'email invalide",
    'onboarding.s2.error.password': '⚠ Le mot de passe ne répond pas aux exigences',
    'onboarding.s2.error.confirm_pwd': '⚠ Les mots de passe ne correspondent pas',
    'onboarding.s2.error.phone': '⚠ Numéro de téléphone invalide',
    'onboarding.s2.creating': 'Création du compte…',

    // ── ONBOARDING — Profile step ─────────────────────────────────
    'onboarding.s4.birthdate.placeholder': 'JJ/MM/AAAA',
    'onboarding.s4.nationality.placeholder': 'Sélectionnez votre nationalité',
    'onboarding.s4.country.placeholder': 'Sélectionnez un pays',
    'onboarding.s4.profession.placeholder': 'Sélectionnez votre profession',
    'onboarding.s4.address1.placeholder': '12 rue de la Paix',
    'onboarding.s4.address2.placeholder': 'Appartement, bâtiment...',
    'onboarding.s4.city.placeholder': 'Paris',
    'onboarding.s4.postal.placeholder': '75001',
    'onboarding.s4.income.placeholder': 'Sélectionnez votre source de revenus',
    'onboarding.s4.error.birthdate': '⚠ Vous devez avoir 18 ans ou plus',
    'onboarding.s4.error.address1': '⚠ Adresse requise',
    'onboarding.s4.error.city': '⚠ Ville requise',
    'onboarding.s4.error.postal': '⚠ Code postal requis',
    'onboarding.s4.data_notice': "🔒 Vos données sont chiffrées AES-256 et ne sont jamais vendues à des tiers",

    // ── ONBOARDING — KYC sub-steps ────────────────────────────────
    'onboarding.kyc.sub.document': 'Document',
    'onboarding.kyc.sub.selfie': 'Selfie',
    'onboarding.kyc.sub.verification': 'Vérification',
    'onboarding.kyc.doc.passport': 'Passeport',
    'onboarding.kyc.doc.cni': "Carte d'identité",
    'onboarding.kyc.doc.license': 'Permis de conduire',
    'onboarding.kyc.upload.hint': 'Glissez votre document ici',
    'onboarding.kyc.upload.click': 'ou cliquez pour sélectionner',
    'onboarding.kyc.upload.formats': 'Formats acceptés : JPG, PNG, PDF · Max 10MB',
    'onboarding.kyc.upload.done_recto': '✅ Document recto reçu',
    'onboarding.kyc.upload.done_verso': '✅ Document verso reçu',
    'onboarding.kyc.selfie.ok': '✅ Selfie validé avec succès !',
    'onboarding.kyc.camera.label': 'Zone caméra simulée',
    'onboarding.kyc.camera.pos': 'Positionnez votre visage dans le cadre',
    'onboarding.kyc.tier_active': 'KYC Tier 1 activé · Compte pleinement opérationnel',
    'onboarding.kyc.verify.doc': 'Vérification document...',
    'onboarding.kyc.verify.face': 'Reconnaissance faciale...',
    'onboarding.kyc.verify.aml': 'Vérification listes AML/PEP...',
    'onboarding.kyc.verify.final': 'Validation finale...',
    'onboarding.kyc.selfie.instr1': '✅ Visage entier visible',
    'onboarding.kyc.selfie.instr2': '✅ Bonne luminosité',
    'onboarding.kyc.selfie.instr3': '✅ Document lisible',
    'onboarding.kyc.selfie.instr4': '❌ Pas de lunettes de soleil',

    // ── ONBOARDING — Card step ────────────────────────────────────
    'onboarding.s6.virtual.desc': 'Disponible immédiatement',
    'onboarding.s6.physical.desc': '+2-5 jours ouvrés',
    'onboarding.s6.preview_label': 'Aperçu en temps réel',
    'onboarding.s6.card_preview.holder': 'Titulaire',
    'onboarding.s6.holographic': 'Effet holographique simulé',
    'onboarding.s6.create_pin': 'Créer votre PIN',
    'onboarding.s6.confirm_pin': 'Confirmer votre PIN',
    'onboarding.s6.delivery': 'Adresse de livraison (depuis votre profil)',
    'onboarding.s6.delivery_time': '⏱ Estimation : 3-5 jours ouvrés',

    // ── ONBOARDING — Funding step ────────────────────────────────
    'onboarding.s7.amounts': 'Montants suggérés :',
    'onboarding.s7.deposit_address': 'Adresse de dépôt',
    'onboarding.s7.scan': 'Scannez pour envoyer',
    'onboarding.s7.min_fee': '✅ Minimum $10 · Frais 0% · Crédit immédiat',
    'onboarding.s7.sepa_beneficiary': 'Bénéficiaire',
    'onboarding.s7.sepa_ref': 'Référence',
    'onboarding.s7.sepa_note': '⏱ 1-2 jours ouvrés · Frais 0% · Montant minimum €10',
    'onboarding.s7.skip': 'Je rechargerai plus tard →',
    'onboarding.s7.copy_address': '📋 Copier',

    // ── ONBOARDING — Welcome step ────────────────────────────────
    'onboarding.s8.subtitle': "Votre compte est actif. Votre carte est en cours d'activation.",
    'onboarding.s8.plan_label': 'Plan souscrit',
    'onboarding.s8.holder_label': 'Titulaire',
    'onboarding.s8.email_label': 'Email',
    'onboarding.s8.kyc_label': 'KYC',
    'onboarding.s8.card_label': 'Carte',
    'onboarding.s8.kyc_value': '✅ Tier 1 Activé',
    'onboarding.s8.next1': 'Rechargez votre carte',
    'onboarding.s8.next2': 'Invitez un ami',
    'onboarding.s8.next3': 'Découvrez le dashboard',
    'onboarding.s8.go_dashboard': 'Accéder à mon dashboard →',
    'onboarding.s8.download_apple': "Télécharger sur l'",
    'onboarding.s8.app_store': 'App Store',
    'onboarding.s8.download_google': 'Disponible sur',
    'onboarding.s8.google_play': 'Google Play',
    'onboarding.s8.security': '🔒 Connexion sécurisée SSL/TLS · AES-256 · ISO 27001 · PCI DSS Level 1',

    // ── APP-USER — Dashboard ──────────────────────────────────────
    'app.dashboard.change': '↑ +12.4% &nbsp; +$3,301.25 ce mois',
    'app.dashboard.crypto_holdings': 'Crypto Holdings',
    'app.dashboard.portfolio_alloc': 'Répartition du portefeuille',
    'app.dashboard.recent_tx': 'Transactions récentes',
    'app.dashboard.view_all': 'Voir tout →',
    'app.dashboard.assets_count': '4 actifs',

    // ── APP-USER — Wallet ─────────────────────────────────────────
    'app.wallet.all_assets': 'Tous les actifs',
    'app.wallet.th.asset': 'Actif',
    'app.wallet.th.balance': 'Solde',
    'app.wallet.th.price': 'Prix',
    'app.wallet.th.change': '24h',
    'app.wallet.th.value': 'Valeur',
    'app.wallet.th.actions': 'Actions',
    'app.wallet.btn.deposit': '↓ Déposer',
    'app.wallet.btn.withdraw': '↑ Retirer',

    // ── APP-USER — Swap ───────────────────────────────────────────
    'app.swap.you_pay': 'Vous payez',
    'app.swap.you_receive': 'Vous recevez',
    'app.swap.price_impact': 'Impact prix',
    'app.swap.balance': 'Solde',

    // ── APP-USER — IBAN ───────────────────────────────────────────
    'app.iban.recent_tx': 'Transactions bancaires récentes',
    'app.iban.th.desc': 'Description',
    'app.iban.th.iban': 'IBAN',
    'app.iban.th.date': 'Date',
    'app.iban.th.amount': 'Montant',
    'app.iban.wire_transfer': '↑ Virement',
    'app.iban.rib': '📄 RIB',
    'app.iban.copy_iban': '📋 Copier IBAN',
    'app.iban.download_rib': '📥 Télécharger RIB',

    // ── APP-USER — Yield ──────────────────────────────────────────
    'app.yield.current_apy': 'APY actuel',
    'app.yield.apy_full': 'Rendement annuel en pourcentage',
    'app.yield.active_pools': 'Pools actifs',
    'app.yield.simulator': 'Simulateur de gains',
    'app.yield.invest_amount': 'Montant investi',
    'app.yield.at_apy': 'à 24% APY',
    'app.yield.monthly_sim': 'Mensuel',
    'app.yield.annual_sim': 'Annuel',
    'app.yield.stake_now': 'Staker maintenant',

    // ── APP-USER — Affiliate ──────────────────────────────────────
    'app.affiliate.your_code': 'Votre code de parrainage',
    'app.affiliate.total_referrals': 'Total parrainages',
    'app.affiliate.total_earned': 'Total gagné',
    'app.affiliate.active_count': 'Parrainages actifs',
    'app.affiliate.commission_rate': 'Taux de commission',
    'app.affiliate.commission_struct': 'Structure de commission',
    'app.affiliate.copy_link': '📋 Copier le lien',

    // ── APP-USER — KYC ────────────────────────────────────────────
    'app.kyc.tier2_verified': 'KYC Tier 2 — Vérifié',
    'app.kyc.tier2_desc': 'Votre identité a été vérifiée. Vous pouvez accéder à toutes les fonctionnalités Tier 2.',
    'app.kyc.submitted_docs': 'Documents soumis',
    'app.kyc.tier.enhanced': 'Amélioré',
    'app.kyc.upgrade': 'Améliorer →',
    'app.kyc.completed': '✓ Complété',
    'app.kyc.active': '✓ Actif',

    // ── APP-USER — Settings ───────────────────────────────────────
    'app.settings.save': 'Enregistrer',
    'app.settings.change_pwd': 'Changer de mot de passe',
    'app.settings.email.label': 'Email',
    'app.settings.email.readonly': '(lecture seule)',
    'app.settings.referral': 'Parrainage',
    'app.settings.referral_code': 'Votre code de parrainage',
    'app.settings.referral_link': 'Lien de parrainage',
    'app.settings.yield_reports': 'Rapports Yield',
    'app.settings.yield_reports.desc': 'Récapitulatif mensuel des gains',
    'app.settings.new_card': '+ Nouvelle carte',
    'app.cards.monthly_limit': 'Limite mensuelle',
    'app.cards.topup': '💳 Recharger la carte',
    'app.cards.expires': 'EXPIRE',

    // ── APP-ADMIN — Tables headers ────────────────────────────────
    'admin.users.filter.all_tiers': 'Tous tiers',
    'admin.users.filter.all_status': 'Tous statuts',
    'admin.tx.filter.all_types': 'Tous types',
    'admin.tx.filter.all_status': 'Tous statuts',
    'admin.logins.filter.all': 'Toutes',
    'admin.logins.filter.success': '✅ Réussies',
    'admin.logins.filter.fail': '❌ Échouées',
    'admin.audit.filter.all': 'Toutes les actions',
    'admin.audit.count': '— entrées',

    // ── APP-ADMIN — Affiliates section ────────────────────────────
    'admin.affiliate.kpi.active_sub': '+23 ce mois',
    'admin.affiliate.kpi.pending_sub': 'Mars 2026',
    'admin.affiliate.kpi.volume_sub': 'Réseau total actif',
    'admin.affiliate.batch_btn': '💸 Paiement batch',

    // ── APP-ADMIN — Yield section ─────────────────────────────────
    'admin.yield.kpi.managed_sub': '6 investisseurs',
    'admin.yield.kpi.monthly_sub': 'APY 24% — Mars 2026',
    'admin.yield.kpi.total_sub': 'Depuis ouverture',
    'admin.yield.payout_btn': '📤 Versement mensuel',

    // ── APP-ADMIN — Finances ──────────────────────────────────────
    'admin.finances.revenue': 'Revenus',
    'admin.finances.costs': 'Coûts',
    'admin.finances.net_margin': 'Marge nette Mars 2026',
    'admin.finances.f_card_sales': 'Ventes cartes',
    'admin.finances.f_topup_fees': 'Frais recharge (3.5%)',
    'admin.finances.f_swap_fees': 'Frais swap (0.25%)',
    'admin.finances.c_bin': 'Frais BIN Wallester',
    'admin.finances.c_physical': 'Coût cartes physiques',
    'admin.finances.c_yield': 'Yield investisseurs',
    'admin.finances.c_affiliate': 'Commissions affiliés',

    // ── APP-ADMIN — Settings ──────────────────────────────────────
    'admin.settings.fees_title': '💲 Frais & Prix',
    'admin.settings.affiliate_title': '🤝 Commissions affiliés',
    'admin.settings.limits_title': '🎚️ Limites par tier',
    'admin.settings.api_title': '🔌 API Status',
    'admin.settings.system_title': '🛡️ Système',
    'admin.settings.maintenance.desc': "Bloquer l'accès utilisateurs et afficher une page de maintenance",
    'admin.settings.maintenance.title': 'Mode maintenance',
    'admin.audit.sub': 'Actions administratives et événements de sécurité',
    'admin.logins.sub': 'Historique des authentifications et tentatives suspectes',
    'admin.kyc.count_badge': '12 dossiers',
    'admin.cards.badge': '10 cartes',


    // ── PAGE TITLES ───────────────────────────────────────────────
    'page.title.login': 'APEXCARD — Sign In',
    'page.title.onboarding': 'APEXCARD — Open an Account',
    'page.title.app': 'APEXCARD — Dashboard',
    'page.title.admin': 'APEXCARD — Admin Panel',
    'page.title.privacy': 'APEXCARD — Privacy Policy',
    'page.title.legal': 'APEXCARD — Terms & Conditions',

    // ── ONBOARDING — Plan features ────────────────────────────────
    'onboarding.plan.starter.f1': 'Virtual card',
    'onboarding.plan.starter.f2': '€500/month limit',
    'onboarding.plan.starter.f3': 'Mobile app',
    'onboarding.plan.starter.f4': 'Email support',
    'onboarding.plan.standard.f1': 'Physical Mastercard',
    'onboarding.plan.standard.f2': '€5,000/month limit',
    'onboarding.plan.standard.f3': 'Personal IBAN',
    'onboarding.plan.standard.f4': 'Priority 24/7 support',
    'onboarding.plan.standard.f5': '1% cashback',
    'onboarding.plan.premium.f1': 'Gold Mastercard',
    'onboarding.plan.premium.f2': 'Unlimited spending',
    'onboarding.plan.premium.f3': '24% APY on balance',
    'onboarding.plan.premium.f4': 'Dedicated account manager',
    'onboarding.plan.premium.f5': 'Airport lounge access',
    'onboarding.plan.premium.f6': 'Premium travel insurance',
    'onboarding.s1.period': '/month',

    // ── ONBOARDING — Form labels ──────────────────────────────────
    'onboarding.s2.firstname.placeholder': 'John',
    'onboarding.s2.lastname.placeholder': 'Doe',
    'onboarding.s2.email.placeholder': 'john@example.com',
    'onboarding.s2.password.placeholder': 'Minimum 8 characters',
    'onboarding.s2.confirm_pwd.placeholder': 'Repeat your password',
    'onboarding.s2.phone.placeholder': '6 12 34 56 78',
    'onboarding.s2.pwd.label': 'Enter a password',
    'onboarding.s2.error.firstname': '⚠ First name required',
    'onboarding.s2.error.lastname': '⚠ Last name required',
    'onboarding.s2.error.email': '⚠ Invalid email format',
    'onboarding.s2.error.password': '⚠ Password does not meet requirements',
    'onboarding.s2.error.confirm_pwd': '⚠ Passwords do not match',
    'onboarding.s2.error.phone': '⚠ Invalid phone number',
    'onboarding.s2.creating': 'Creating account…',

    // ── ONBOARDING — Profile step ─────────────────────────────────
    'onboarding.s4.birthdate.placeholder': 'DD/MM/YYYY',
    'onboarding.s4.nationality.placeholder': 'Select your nationality',
    'onboarding.s4.country.placeholder': 'Select a country',
    'onboarding.s4.profession.placeholder': 'Select your occupation',
    'onboarding.s4.address1.placeholder': '12 Rue de la Paix',
    'onboarding.s4.address2.placeholder': 'Apartment, building...',
    'onboarding.s4.city.placeholder': 'Paris',
    'onboarding.s4.postal.placeholder': '75001',
    'onboarding.s4.income.placeholder': 'Select your income source',
    'onboarding.s4.error.birthdate': '⚠ You must be 18 or older',
    'onboarding.s4.error.address1': '⚠ Address required',
    'onboarding.s4.error.city': '⚠ City required',
    'onboarding.s4.error.postal': '⚠ Postal code required',
    'onboarding.s4.data_notice': '🔒 Your data is AES-256 encrypted and never sold to third parties',

    // ── ONBOARDING — KYC sub-steps ────────────────────────────────
    'onboarding.kyc.sub.document': 'Document',
    'onboarding.kyc.sub.selfie': 'Selfie',
    'onboarding.kyc.sub.verification': 'Verification',
    'onboarding.kyc.doc.passport': 'Passport',
    'onboarding.kyc.doc.cni': 'National ID',
    'onboarding.kyc.doc.license': "Driver\'s license",
    'onboarding.kyc.upload.hint': 'Drop your document here',
    'onboarding.kyc.upload.click': 'or click to select',
    'onboarding.kyc.upload.formats': 'Accepted formats: JPG, PNG, PDF · Max 10MB',
    'onboarding.kyc.upload.done_recto': '✅ Front of document received',
    'onboarding.kyc.upload.done_verso': '✅ Back of document received',
    'onboarding.kyc.selfie.ok': '✅ Selfie validated successfully!',
    'onboarding.kyc.camera.label': 'Simulated camera area',
    'onboarding.kyc.camera.pos': 'Position your face in the frame',
    'onboarding.kyc.tier_active': 'KYC Tier 1 activated · Account fully operational',
    'onboarding.kyc.verify.doc': 'Verifying document...',
    'onboarding.kyc.verify.face': 'Facial recognition...',
    'onboarding.kyc.verify.aml': 'AML/PEP list screening...',
    'onboarding.kyc.verify.final': 'Final validation...',
    'onboarding.kyc.selfie.instr1': '✅ Full face visible',
    'onboarding.kyc.selfie.instr2': '✅ Good lighting',
    'onboarding.kyc.selfie.instr3': '✅ Document readable',
    'onboarding.kyc.selfie.instr4': '❌ No sunglasses',

    // ── ONBOARDING — Card step ────────────────────────────────────
    'onboarding.s6.virtual.desc': 'Available immediately',
    'onboarding.s6.physical.desc': '+2-5 business days',
    'onboarding.s6.preview_label': 'Live preview',
    'onboarding.s6.card_preview.holder': 'Cardholder',
    'onboarding.s6.holographic': 'Simulated holographic effect',
    'onboarding.s6.create_pin': 'Create your PIN',
    'onboarding.s6.confirm_pin': 'Confirm your PIN',
    'onboarding.s6.delivery': 'Delivery address (from your profile)',
    'onboarding.s6.delivery_time': '⏱ Estimated: 3-5 business days',

    // ── ONBOARDING — Funding step ────────────────────────────────
    'onboarding.s7.amounts': 'Suggested amounts:',
    'onboarding.s7.deposit_address': 'Deposit address',
    'onboarding.s7.scan': 'Scan to send',
    'onboarding.s7.min_fee': '✅ Minimum $10 · Zero fees · Instant credit',
    'onboarding.s7.sepa_beneficiary': 'Beneficiary',
    'onboarding.s7.sepa_ref': 'Reference',
    'onboarding.s7.sepa_note': '⏱ 1-2 business days · Zero fees · Minimum €10',
    'onboarding.s7.skip': "I\'ll fund my account later →",
    'onboarding.s7.copy_address': '📋 Copy',

    // ── ONBOARDING — Welcome step ────────────────────────────────
    'onboarding.s8.subtitle': 'Your account is active. Your card is being activated.',
    'onboarding.s8.plan_label': 'Plan',
    'onboarding.s8.holder_label': 'Cardholder',
    'onboarding.s8.email_label': 'Email',
    'onboarding.s8.kyc_label': 'KYC',
    'onboarding.s8.card_label': 'Card',
    'onboarding.s8.kyc_value': '✅ Tier 1 Activated',
    'onboarding.s8.next1': 'Top up your card',
    'onboarding.s8.next2': 'Invite a friend',
    'onboarding.s8.next3': 'Explore the dashboard',
    'onboarding.s8.go_dashboard': 'Access my dashboard →',
    'onboarding.s8.download_apple': 'Download on the',
    'onboarding.s8.app_store': 'App Store',
    'onboarding.s8.download_google': 'Available on',
    'onboarding.s8.google_play': 'Google Play',
    'onboarding.s8.security': '🔒 Secure connection SSL/TLS · AES-256 · ISO 27001 · PCI DSS Level 1',

    // ── APP-USER — Dashboard ──────────────────────────────────────
    'app.dashboard.change': '↑ +12.4% &nbsp; +$3,301.25 this month',
    'app.dashboard.crypto_holdings': 'Crypto Holdings',
    'app.dashboard.portfolio_alloc': 'Portfolio Allocation',
    'app.dashboard.recent_tx': 'Recent Transactions',
    'app.dashboard.view_all': 'View all →',
    'app.dashboard.assets_count': '4 assets',

    // ── APP-USER — Wallet ─────────────────────────────────────────
    'app.wallet.all_assets': 'All Assets',
    'app.wallet.th.asset': 'Asset',
    'app.wallet.th.balance': 'Balance',
    'app.wallet.th.price': 'Price',
    'app.wallet.th.change': '24h',
    'app.wallet.th.value': 'Value',
    'app.wallet.th.actions': 'Actions',
    'app.wallet.btn.deposit': '↓ Deposit',
    'app.wallet.btn.withdraw': '↑ Withdraw',

    // ── APP-USER — Swap ───────────────────────────────────────────
    'app.swap.you_pay': 'You pay',
    'app.swap.you_receive': 'You receive',
    'app.swap.price_impact': 'Price Impact',
    'app.swap.balance': 'Balance',

    // ── APP-USER — IBAN ───────────────────────────────────────────
    'app.iban.recent_tx': 'Recent Bank Transactions',
    'app.iban.th.desc': 'Description',
    'app.iban.th.iban': 'IBAN',
    'app.iban.th.date': 'Date',
    'app.iban.th.amount': 'Amount',
    'app.iban.wire_transfer': '↑ Wire Transfer',
    'app.iban.rib': '📄 RIB',
    'app.iban.copy_iban': '📋 Copy IBAN',
    'app.iban.download_rib': '📥 Download',

    // ── APP-USER — Yield ──────────────────────────────────────────
    'app.yield.current_apy': 'Current APY',
    'app.yield.apy_full': 'Annual Percentage Yield',
    'app.yield.active_pools': 'Active Pools',
    'app.yield.simulator': 'Earnings Simulator',
    'app.yield.invest_amount': 'Investment amount',
    'app.yield.at_apy': 'at 24% APY',
    'app.yield.monthly_sim': 'Monthly',
    'app.yield.annual_sim': 'Annual',
    'app.yield.stake_now': 'Stake Now',

    // ── APP-USER — Affiliate ──────────────────────────────────────
    'app.affiliate.your_code': 'Your Referral Code',
    'app.affiliate.total_referrals': 'Total Referrals',
    'app.affiliate.total_earned': 'Total Earned',
    'app.affiliate.active_count': 'Active Referrals',
    'app.affiliate.commission_rate': 'Commission Rate',
    'app.affiliate.commission_struct': 'Commission Structure',
    'app.affiliate.copy_link': '📋 Copy Link',

    // ── APP-USER — KYC ────────────────────────────────────────────
    'app.kyc.tier2_verified': 'KYC Tier 2 — Verified',
    'app.kyc.tier2_desc': 'Your identity has been verified. You can access all Tier 2 features.',
    'app.kyc.submitted_docs': 'Submitted Documents',
    'app.kyc.tier.enhanced': 'Enhanced',
    'app.kyc.upgrade': 'Upgrade →',
    'app.kyc.completed': '✓ Completed',
    'app.kyc.active': '✓ Active',

    // ── APP-USER — Settings ───────────────────────────────────────
    'app.settings.save': 'Save Changes',
    'app.settings.change_pwd': 'Change Password',
    'app.settings.email.label': 'Email',
    'app.settings.email.readonly': '(read-only)',
    'app.settings.referral': 'Referral',
    'app.settings.referral_code': 'Your Referral Code',
    'app.settings.referral_link': 'Referral link',
    'app.settings.yield_reports': 'Yield Reports',
    'app.settings.yield_reports.desc': 'Monthly earnings summary',
    'app.settings.new_card': '+ New Card',
    'app.cards.monthly_limit': 'Monthly limit',
    'app.cards.topup': '💳 Top Up Card',
    'app.cards.expires': 'EXPIRES',

    // ── APP-ADMIN — Tables / Filters ─────────────────────────────
    'admin.users.filter.all_tiers': 'All tiers',
    'admin.users.filter.all_status': 'All statuses',
    'admin.tx.filter.all_types': 'All types',
    'admin.tx.filter.all_status': 'All statuses',
    'admin.logins.filter.all': 'All',
    'admin.logins.filter.success': '✅ Successful',
    'admin.logins.filter.fail': '❌ Failed',
    'admin.audit.filter.all': 'All actions',
    'admin.audit.count': '— entries',

    // ── APP-ADMIN — Affiliates section ────────────────────────────
    'admin.affiliate.kpi.active_sub': '+23 this month',
    'admin.affiliate.kpi.pending_sub': 'March 2026',
    'admin.affiliate.kpi.volume_sub': 'Total active network',
    'admin.affiliate.batch_btn': '💸 Batch payout',

    // ── APP-ADMIN — Yield section ─────────────────────────────────
    'admin.yield.kpi.managed_sub': '6 investors',
    'admin.yield.kpi.monthly_sub': 'APY 24% — March 2026',
    'admin.yield.kpi.total_sub': 'Since inception',
    'admin.yield.payout_btn': '📤 Monthly payout',

    // ── APP-ADMIN — Finances ──────────────────────────────────────
    'admin.finances.revenue': 'Revenue',
    'admin.finances.costs': 'Costs',
    'admin.finances.net_margin': 'Net margin March 2026',
    'admin.finances.f_card_sales': 'Card sales',
    'admin.finances.f_topup_fees': 'Top-up fees (3.5%)',
    'admin.finances.f_swap_fees': 'Swap fees (0.25%)',
    'admin.finances.c_bin': 'BIN fees (Wallester)',
    'admin.finances.c_physical': 'Physical card cost',
    'admin.finances.c_yield': 'Investor yield payouts',
    'admin.finances.c_affiliate': 'Affiliate commissions',

    // ── APP-ADMIN — Settings ──────────────────────────────────────
    'admin.settings.fees_title': '💲 Fees & Pricing',
    'admin.settings.affiliate_title': '🤝 Affiliate Commissions',
    'admin.settings.limits_title': '🎚️ Tier Limits',
    'admin.settings.api_title': '🔌 API Status',
    'admin.settings.system_title': '🛡️ System',
    'admin.settings.maintenance.desc': 'Block user access and display a maintenance page',
    'admin.settings.maintenance.title': 'Maintenance mode',
    'admin.audit.sub': 'Administrative actions and security events',
    'admin.logins.sub': 'Authentication history and suspicious attempts',
    'admin.kyc.count_badge': '12 dossiers',
    'admin.cards.badge': '10 cards',

    // Shared footer links
    'footer.home': 'Home',
    'footer.privacy': 'Privacy',
    'footer.legal': 'Terms',
  }
};

// ─── Lang-switcher CSS (injected once) ─────────────────────────────────────
(function injectStyles() {
  if (document.getElementById('i18n-style')) return;
  const style = document.createElement('style');
  style.id = 'i18n-style';
  style.textContent = `
    .lang-switcher {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 100px;
      padding: 3px;
      flex-shrink: 0;
    }
    .lang-btn {
      background: transparent;
      border: none;
      border-radius: 100px;
      padding: 5px 10px;
      font-family: inherit;
      font-size: 12px;
      font-weight: 600;
      color: rgba(255,255,255,0.5);
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.04em;
      white-space: nowrap;
    }
    .lang-btn:hover {
      color: rgba(255,255,255,0.85);
      background: rgba(255,255,255,0.06);
    }
    .lang-btn.active {
      background: rgba(14,165,233,0.18);
      border: 1px solid rgba(14,165,233,0.4);
      color: #38bdf8;
      box-shadow: 0 0 12px rgba(14,165,233,0.2);
    }
  `;
  document.head.appendChild(style);
})();

// ─── Core functions ─────────────────────────────────────────────────────────

let _currentLang = 'fr';

/**
 * Returns translation for key in current language, fallback to FR then key itself.
 */
function t(key) {
  const lang = _currentLang;
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
         (TRANSLATIONS['fr'] && TRANSLATIONS['fr'][key]) ||
         key;
}

/**
 * Apply all data-i18n translations to the DOM.
 */
function applyTranslations(lang) {
  const tr = TRANSLATIONS[lang] || TRANSLATIONS['fr'];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      // Allow innerHTML for keys containing HTML
      if (tr[key].includes('<') || tr[key].includes('&nbsp;')) {
        el.innerHTML = tr[key];
      } else {
        el.textContent = tr[key];
      }
    }
  });

  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (tr[key] !== undefined) el.placeholder = tr[key];
  });

  // Title / aria-label
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (tr[key] !== undefined) {
      el.title = tr[key];
      el.setAttribute('aria-label', tr[key]);
    }
  });

  // Update active state on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update <html lang>
  document.documentElement.lang = lang;
}

/**
 * Set language, persist, and apply.
 */
function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  _currentLang = lang;
  localStorage.setItem('apexcard_lang', lang);
  applyTranslations(lang);
}

/**
 * Read stored language (default: fr) and apply.
 */
function initLang() {
  const stored = localStorage.getItem('apexcard_lang') || 'fr';
  _currentLang = stored;
  applyTranslations(stored);
}

// Expose globally
window.i18n = { setLang, initLang, t };
window.t = t;
