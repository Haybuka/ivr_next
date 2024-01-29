'use client';
import Link from 'next/link';
import cls from 'classnames';
import { usePathname } from 'next/navigation';

const NavItem = ({ info }) => {
  const pathname = usePathname();

  return (
    <Link
      href={info.path}
      className={cls(
        'mx-4',
        info?.path.includes(pathname) ? 'text-ivr-100' : 'text-black'
      )}
    >
      <li className="capitalize">{info.name}</li>
    </Link>
  );
};

export default NavItem;
