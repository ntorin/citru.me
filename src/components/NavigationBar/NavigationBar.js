import React from 'react';
import glamorous from 'glamorous';

import { colors, getBackgroundColor } from 'helpers/constants';

export default class NavigationBar extends React.Component {

    constructor(props) {
        super();
        this.state = {
            darkTheme: true
        }
    }

    swapTheme() {
        this.setState({ darkTheme: true })
    }

    render() {
        return (
            <Container darkTheme={this.state.darkTheme}>
                <HomeIcon style={{color: colors.primary}} href={"/"}>
                    Citru.me
                </HomeIcon>
            </Container>
        );
    }
}

const Container = glamorous.nav({
    color: colors.primary
}, () => ('navbar navbar-dark navbar-expand-sm navbar-fixed-top'),
    ({ darkTheme }) => ({
        backgroundColor: getBackgroundColor(false)
    })
);

const HomeIcon = glamorous.a({
    color: colors.primary
}, () => ('navbar-brand'))