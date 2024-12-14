'use client';  // Client-side component

import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation
import Link from 'next/link';
import styles from '../styles/Breadcrumb.module.css';

const Breadcrumb = () => {
  const pathname = usePathname();  // Get the current pathname

  // Split the pathname into individual segments for breadcrumbs
  const breadcrumbItems = pathname.split('/').filter((item) => item);

  return (
    <nav className={styles.breadcrumb}>
      <ul>
        {/* Remove Home breadcrumb here to avoid duplication */}
        {breadcrumbItems.map((item, index) => {
          const path = '/' + breadcrumbItems.slice(0, index + 1).join('/');
          return (
            <li key={index}>
              <Link href={path}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
