import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import brand from '~/public/text/brand';
import routerLink from '~/public/text/link';
import logo from '~/public/images/beautyPlayers/logo-192.png';
import { useText } from '~/theme/common';
import useStyles from './form-style';

function AuthFrame(props) {
  const { i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { children, title, subtitle } = props;
  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <div className={classes.pageWrap}>
      {!isDesktop && (
        <div className={cx(classes.logo, classes.logoHeader)}>
          <a href={curLang + routerLink.movie.home}>
            <img src={logo} alt="logo" />
            <Typography component="p" className={text.subtitle2}>
              Beauty Players
            </Typography>
          </a>
        </div>
      )}
      <Container maxWidth="lg" className={classes.innerWrap}>
        <div className={classes.decoration}>
          <svg
            className={classes.leftDeco}
          >
            <use xlinkHref="/images/movie/deco-bg-left.svg#main" />
          </svg>
          <svg
            className={classes.rightDeco}
          >
            <use xlinkHref="/images/movie/deco-bg-right.svg#main" />
          </svg>
        </div>
        <Paper className={cx(classes.formBox, 'fragment-fadeUp')}>
          <IconButton href={curLang + routerLink.movie.home} className={classes.backtohome} size="large">
            <span>
              <i className="ion-ios-home-outline" />
              <i className="ion-ios-arrow-round-back" />
            </span>
          </IconButton>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                {!isTablet && (
                  <div className={classes.greeting}>
                    <div className={classes.logo}>
                      <img src={logo} alt="logo" />
                      <Typography className={text.subtitle2}>
                      Beauty Players
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4" className={text.subtitle}>
                      { title }
                    </Typography>
                    <Typography variant="h6" className={text.paragraph}>
                      { subtitle }
                    </Typography>
                  </div>
                )}
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
};

export default AuthFrame;
