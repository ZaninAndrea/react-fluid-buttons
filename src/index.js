import React, {Component} from "react"
import "./style.css"

class ButtonGroup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: null,
        }
    }

    render() {
        const bound = this.state.selected
            ? this.state.selected.getBoundingClientRect()
            : {}
        const boundMe = this.me ? this.me.getBoundingClientRect() : {}
        const highlight =
            this.state.selected && this.me ? (
                <span
                    className="fluid-button-highlight"
                    style={{
                        left: bound.left - boundMe.left,
                        top: bound.top - boundMe.top,
                        width: bound.width,
                        height: bound.height,
                        transition: this.props.transition
                            ? this.props.transition
                            : "all 0.35s",
                        transitionDuration: this.props.trasitionDuration
                            ? this.props.trasitionDuration
                            : "0.35s",
                    }}
                />
            ) : (
                ""
            )

        const childs = React.Children.map(this.props.children, (child, i) => {
            if (child.type === Button)
                return (
                    <child.type
                        {...child.props}
                        onMouseOver={ref => this.setState({selected: ref})}
                    />
                )
        })

        return (
            <div
                ref={el => (this.me = el)}
                {...this.props}
                className={
                    this.props.className
                        ? "fluid-button-container " + this.props.className
                        : "fluid-button-container"
                }
                onMouseLeave={() => this.setState({selected: null})}
            >
                {highlight}
                {childs}
            </div>
        )
    }
}

class Button extends Component {
    render() {
        const { children, className, onMouseOver } = this.props
        const btnClass = className ? "fluid-button " + className : "fluid-button"
        return (
<<<<<<< HEAD
            <div
                onClick={this.props.onClick}
                style={this.props.style}
                className="fluid-button"
                onMouseOver={() => this.props.onMouseOver(this.selectedRef)}
                ref={elem => {
                    this.selectedRef = elem
                }}
            >
                {this.props.children}
=======
            <div {...this.props} className={btnClass} onMouseOver={() => onMouseOver && onMouseOver(this.selectedRef)} ref={(elem) => { this.selectedRef = elem }}>
                {children}
>>>>>>> de92a75f92485ebd3640210ff32d8fc0dcaf56cd
            </div>
        )
    }
}

export {ButtonGroup, Button}
