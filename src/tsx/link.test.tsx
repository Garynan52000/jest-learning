import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Link } from './Link';

it('renders with no props', () => {
    const tree = renderer
        .create(<Link></Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders as FaceBook _blank link', () => {
    const tree = renderer
        .create(<Link href="http://www.facebook.com" target="_blank">Facebook</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('properly escapes quotes', () => {
    const tree = renderer
        .create(<Link>{ "\"Facebook\" \\'is \\ 'awesome'" }</Link>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('changes the class when hovered', () => {
    const component = renderer.create(
        <Link>HOVER</Link>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseEnter();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    renderer.act(() => {
        tree.props.onMouseLeave();
    });
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});