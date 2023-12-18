'use client';
import Link from 'next/link';
import cls from 'classnames';
import { usePathname } from 'next/navigation';

const NavItem = ({ info }) => {
  const pathname = usePathname();
  console.log(info.path, pathname);
  return (
    <Link
      href={info.path}
      className={cls(
        'mx-4',
        info?.path.includes(pathname) ? 'text-orange-600' : 'text-black'
      )}
    >
      <li className="capitalize">{info.name}</li>
    </Link>
  );
};

export default NavItem;
