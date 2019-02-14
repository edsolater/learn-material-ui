import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Menu,
  MenuItem,
  Avatar
} from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Menu as MenuIcon
} from '@material-ui/icons'

import { getShelfBoardNames } from '../data/selectors'
import { showActiveShelfBoard } from '../data/actionCreators'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    width: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  avatarButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.primary.main
  }
}))

function ShopBar({ setters: { boolen: toggleFavorites } = {}, shelfBoardNames = [] }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)

  const closeShopMenu = () => {
    setAnchorEl(null)
  }
  const openShopMenu = e => {
    setAnchorEl(e.currentTarget)
  }

  const shopMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={isMenuOpen}
      onClose={closeShopMenu}
    >
      {shelfBoardNames.map(shelfBoardName => (
        <MenuItem onClick={showActiveShelfBoard}>
          <Avatar className={classes.avatarButton}>{shelfBoardName}</Avatar>
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <div className={classes.root}>
      <AppBar position={'sticky'}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={openShopMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <div aria-label="grow-space-box" className={classes.grow} />
          <div className={classes.iconButtons}>
            <IconButton color="inherit" onClick={toggleFavorites}>
              <Badge badgeContent={4} color="secondary">
                <HomeIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {shopMenu}
    </div>
  )
}

const mapState = (state = {}) => {
  const shelfBoardNames = getShelfBoardNames(state.shelfBoards)
  return {
    shelfBoardNames
  }
}

export default connect(mapState)(ShopBar)
