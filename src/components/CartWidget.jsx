const CartWidget = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: '2rem', height: '2rem' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.023.835l.236 1.767c.05.37.05.753.041 1.144-.002.193-.016.386-.048.577-.07.41-.013.829.136 1.22l.533 1.488a.96.96 0 0 0 .848.563h9.843c.48 0 .937-.282 1.14-.727l2.843-6.195a.96.96 0 0 0-.158-1.09c-.218-.217-.506-.328-.808-.328H8.723a.96.96 0 0 0-.903.626L7.33 7.84a.96.96 0 0 0-.256-.47L4.78 4.654a.96.96 0 0 0-.895-.626H2.25zM12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        />
      </svg>
      
      {/* Burbuja de notificación estática */}
      <span
        style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '-0.5rem',
          backgroundColor: '#EF4444', 
          color: 'white',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          width: '1rem',
          height: '1rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        3
      </span>
    </div>
    );
  };

  export default CartWidget;