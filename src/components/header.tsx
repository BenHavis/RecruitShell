"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layout, Typography, Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./header.module.css";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <AntHeader className={styles.header}>
      {/* Responsive logo using AntD Title */}
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Title level={3} className={styles.logoTitle}>
            Inventure Demo
          </Title>
        </Link>
      </div>

      {/* Desktop nav */}
      <nav className={styles.navDesktop} aria-label="Primary">
        <Link href="/">Home</Link>
        <Link href="/community">Community</Link>
        <Link href="/ai">AI</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Mobile menu button */}
      <div className={styles.navMobile}>
        <Button
          type="text"
          aria-label="Open menu"
          className={styles.menuBtn}
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
        />
        <Drawer
          title="Menu"
          placement="right"
          closeIcon={<CloseOutlined />}
          onClose={() => setOpen(false)}
          open={open}
          styles={{ body: { padding: 0 } }}
        >
          <nav className={styles.drawerNav} aria-label="Mobile">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/community" onClick={() => setOpen(false)}>Community</Link>
            <Link href="/ai" onClick={() => setOpen(false)}>AI</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </Drawer>
      </div>
    </AntHeader>
  );
}
