import * as React from 'react'
import {connect} from 'react-redux'
import {withStyles, WithStyles} from '@material-ui/core/styles'
import {Button, TextField, Theme, FormControl} from '@material-ui/core'
import {RootState} from '../redux/models'
import * as actions from '../redux/actions'

const styles = (theme: Theme) => ({
  form: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

interface Props extends WithStyles<typeof styles> {
  addTodo: (title: string) => any
}

interface ComponentState {
  title: string
}

class Component extends React.Component<Props, ComponentState> {
  readonly state: Readonly<ComponentState> = {title: ''}

  handleTitleChange: React.ReactEventHandler<HTMLInputElement> = (ev) => {
    this.setState({title: ev.currentTarget.value})
  }

  handleAdd = () => {
    this.props.addTodo(this.state.title)
    this.setState({title: ''})
  }

  onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      this.handleAdd()
    }
  }

  render() {
    const {title} = this.state
    const {classes} = this.props

    return (
      <FormControl fullWidth={true}>
        <TextField
          label="Enter new todo"
          className={classes.form}
          margin="normal"
          value={title}
          onChange={this.handleTitleChange}
          onKeyUp={this.onKeyUp}
        />
        <Button
          disabled={!title}
          className={classes.form}
          onClick={this.handleAdd}
          variant="outlined"
          color="primary"
        >
          Add
        </Button>
      </FormControl>
    )
  }
}

const mapStateToProps = (state: RootState) => ({})

export default connect(
  mapStateToProps,
  {
    addTodo: (title: string) => actions.add({title}),
  }
)(withStyles(styles)(Component))
