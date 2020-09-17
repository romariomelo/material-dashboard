import {
  Dashboard as DashboardIcon,
  Book as BookIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  ImportContacts as ImportContactsIcon,
  AccessTime as AccessTimeIcon,
  Grade as GradeIcon,
  CloudDownload as CloudDownloadIcon,
  Mail as MailIcon,
  Info as InfoIcon,
  VpnKey as VpnKeyIcon
} from "@material-ui/icons"

const Menu = [
  {
    href: '/',
    icon: DashboardIcon,
    title: 'Início'
  },
  {
    icon: BookIcon,
    title: 'Acadêmico',
    buttonsColor: '#f8ac59',
    textColor: '#ffffff',
    submenu: [
      {
        href: '/customers',
        icon: ImportContactsIcon,
        title: 'Diário de Turma',
      },
      {
        href: '/app/customers',
        icon: AccessTimeIcon,
        title: 'Horário Escolar',
      },
      {
        href: '/app/customers',
        icon: GradeIcon,
        title: 'Notas',
      },
      {
        href: '/app/customers',
        icon: CloudDownloadIcon,
        title: 'Material para Downloads',
      },
    ]
  },
  {
    href: '/app/products',
    icon: ChatIcon,
    title: 'Comunique-se',
    buttonsColor: '#1c84c6',
    textColor: '#ffffff',
    submenu: [
      {
        href: '/app/customers',
        icon: MailIcon,
        title: 'Mensagens',
      },
      {
        href: '/app/customers',
        icon: InfoIcon,
        title: 'Informativos',
      },
    ]
  },
  {
    href: '/app/account',
    icon: PersonIcon,
    title: 'Meu Perfil',
    buttonsColor: '#23c6c8',
    textColor: '#ffffff',
    submenu: [
      {
        href: '/app/customers',
        icon: PersonIcon,
        title: 'Perfil',
      },
      {
        href: '/app/customers',
        icon: VpnKeyIcon,
        title: 'Alterar Senha',
      },
    ]
  }
];;

export default Menu;
