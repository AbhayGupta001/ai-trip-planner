import Plan from './Plan';

const PersonalizedPlan = ({ data, hidden }) => {
  console.log('hehe', data);
  return (
    <div>
      <section className='popular' id='destination'>
        <div className='container'>
          <p className='section-subtitle'>
            {hidden
              ? 'Get Your Personalized Plan'
              : "Congratulations! Here's your"}
          </p>
          <h2 className='h2 section-title'>Personalized Plan</h2>
          <p className='section-text'>
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
            nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
            tenetur, aptent.
          </p>
          <ul className='popular-list'>
            {Array.isArray(data)
              ? !hidden &&
                data.map((item) => {
                  return <li>{<Plan data={item} />}</li>;
                })
              : null}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PersonalizedPlan;
