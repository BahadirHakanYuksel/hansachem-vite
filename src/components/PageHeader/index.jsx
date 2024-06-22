function PageHeader({ text }) {
  return (
    <header className="flex px-3 items-center justify-start bg-gradient-to-l to-[color:var(--hansaBlue)] from-[color:var(--hansaRed)] text-white text-2xl font-medium h-10 rounded-md">
      {text}
    </header>
  );
}

export default PageHeader;
