import styles from './Footer.module.css';
function Footer() {

  return (
    <>
      <div className={styles.footer + ' p-5 text-center bg-secondary'}>
        <div>@Pintelek</div>
      </div>
      
    </>
  );
}

export default Footer;