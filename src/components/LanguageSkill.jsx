const LanguageSkill = ({theme, setTheme}) => {
  return (
    <section>
      <div className={theme == "light"?"stats shadow m-3 bg-pink-400": "stats shadow m-3 bg-gradient-to-r from-pink-700 to-purple-500 " }>
        <div className="stat">
          <div className="stat-title text-white">Native</div>
          <div className="stat-value text-white">Bahasa</div>
        </div>
      </div>
      <div className={theme == "light"?"stats shadow m-3 bg-pink-400": "stats shadow m-3 bg-gradient-to-r from-pink-700 to-purple-500 " }>
        <div className="stat">
          <div className="stat-title text-white">Advance</div>
          <div className="stat-value text-white">English</div>
        </div>
      </div>
      <div className={theme == "light"?"stats shadow m-3 bg-pink-400": "stats shadow m-3 bg-gradient-to-r from-pink-700 to-purple-500 " }>
        <div className="stat">
          <div className="stat-title text-white">Intermediate</div>
          <div className="stat-value text-white">Korea</div>
        </div>
      </div>
      <div className={theme == "light"?"stats shadow m-3 bg-pink-400": "stats shadow m-3 bg-gradient-to-r from-pink-700 to-purple-500 " }>
        <div className="stat">
          <div className="stat-title text-white">Beginner</div>
          <div className="stat-value text-white">Chinese</div>
        </div>
      </div>
      <div className={theme == "light"?"stats shadow m-3 bg-pink-400": "stats shadow m-3 bg-gradient-to-r from-pink-700 to-purple-500 " }>
        <div className="stat">
          <div className="stat-title text-white">Intermediate</div>
          <div className="stat-value text-white">Arab</div>
        </div>
      </div>
    </section>
  );
}
export default LanguageSkill;