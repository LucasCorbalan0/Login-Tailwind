import '../CSS/Main.css';
import { Link } from 'react-router-dom';


const Main = () => {

  return (
    <div className="main-container">
      {/* Sección Hero */}
      <div className="hero-section bg-primary text-white py-5 mb-5">
        <div className="container">
          <h1 className="display-4">Bienvenidos al Hospital San Juan</h1>
          <p className="lead">Cuidando tu salud con excelencia y calidez humana desde 1985</p>
        </div>
      </div>

      <div className="container">
        {/* Sección de Descripción */}
        <section className="mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="mb-4">Nuestro Compromiso</h2>
              <p className="lead">En Hospital San Juan, nos dedicamos a ofrecer atención médica de la más alta calidad, combinando tecnología de vanguardia con un trato humano y personalizado.</p>
              <p>Fundado en 1985, nuestro hospital se ha convertido en un referente en la región por nuestra excelencia médica y compromiso con el bienestar de nuestros pacientes.</p>
              <div className="d-flex gap-2">
                <Link to='/pacientes' className="btn btn-primary">Ver Pacientes</Link>
                <Link to='/doctores' className="btn btn-outline-primary">Conozca a Nuestros Doctores</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hospital-image p-4">
                <div className="ratio ratio-16x9 bg-light rounded">
                  <div className="d-flex align-items-center justify-content-center text-muted">
                    <i className="bi bi-hospital" style={{fontSize: '4rem'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Nuestros Servicios</h2>
          <div className="row g-4">
            {[
              { icon: 'bi-heart-pulse', title: 'Cardiología', description: 'Atención cardiológica integral con tecnología de punta.' },
              { icon: 'bi-activity', title: 'Pediatría', description: 'Cuidado especializado para los más pequeños.' },
              { icon: 'bi-thermometer-sun', title: 'Emergencias', description: 'Atención las 24 horas los 365 días del año.' },
              { icon: 'bi-capsule', title: 'Farmacia', description: 'Medicamentos de calidad con asesoramiento profesional.' },
            ].map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <i className={`bi ${service.icon} text-primary`} style={{fontSize: '2rem', marginBottom: '1rem'}}></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Estadísticas (opcional) */}
        <section className="bg-light p-4 rounded-3 mb-5">
          <div className="row text-center">
            {[
              { number: '50+', label: 'Doctores Especializados' },
              { number: '10,000+', label: 'Pacientes Atendidos' },
              { number: '30+', label: 'Años de Experiencia' },
              { number: '24/7', label: 'Atención' }
            ].map((stat, index) => (
              <div key={index} className="col-6 col-md-3 py-3">
                <div className="display-5 fw-bold text-primary">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;
