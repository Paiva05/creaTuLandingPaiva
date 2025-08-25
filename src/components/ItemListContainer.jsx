const ItemListContainer = ({ welcome }) => {
    return (
      <main style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600', color: '#374151' }}>
          {welcome}
        </h2>
      </main>
    );
  };

  export default ItemListContainer;