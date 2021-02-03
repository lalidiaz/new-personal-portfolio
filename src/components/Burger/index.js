import React, { useState } from 'react';
//Component
import { Pivot as Hamburger } from 'hamburger-react';

export default function Burger() {
  const [isOpen, setOpen] = useState(false);
  return <Hamburger toggled={isOpen} toggle={setOpen} />;
}
