// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  menuItem: getIcon('ic_menu_item'),
  game: getIcon('ic_game'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'general',
  //   items: [
  //     { title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
  //     { title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
  //     { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
  //     { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
  //     { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
  //   ],
  // },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'MẦM NON-GDVN',
    items: [
      // USER
      {
        title: 'Ngôi Nhà Truyện',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.game,
        children: [{ title: 'one', path: PATH_DASHBOARD.user.account }],
      },

      // E-COMMERCE
      {
        title: 'Ngôi Nhà Toán Học',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [{ title: 'one', path: PATH_DASHBOARD.eCommerce.checkout }],
      },

      // INVOICE
      {
        title: 'Ngôi Nhà Khoa Học',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [{ title: 'one', path: PATH_DASHBOARD.invoice.demoEdit }],
      },

      // BLOG
      {
        title: 'Ngôi Nhà Đồ Vật Biết Nghĩ',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'Ghi Nhớ Thẻ Bài', path: PATH_DASHBOARD.blog.posts },
          { title: 'Âm Nhạc Trí Tuệ', path: PATH_DASHBOARD.blog.demoView },
          { title: 'Thời Trang Cho Mèo', path: PATH_DASHBOARD.blog.new },
          { title: 'Đoán Hình', path: PATH_DASHBOARD.blog.new },
          { title: 'Mô Phỏng Hình Học Không Gian', path: PATH_DASHBOARD.blog.new },
        ],
      },
      {
        title: 'Ngôi Nhà Văn Học',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.game,
        children: [{ title: 'one', path: PATH_DASHBOARD.invoice.demoEdit }],
      },
    ],
  },

  // APP
  // ----------------------------------------------------------------------
];

export default navConfig;
