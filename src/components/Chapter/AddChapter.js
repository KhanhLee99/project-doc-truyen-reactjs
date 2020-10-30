import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actGetStoryRequest } from '../../actions/story'

class AddChapter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            pages: 0
        }
        this.pagesRef = React.createRef();
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.getStory(id);
        }
    }

    isChange = () => {
        this.setState({
            pages: this.pagesRef.current.value
        })
    }

    renderInput = () => {
        var inputs = [];
        if (this.state.pages > 0) {
            for (let i = 0; i < this.state.pages; i++) {
                inputs[i] = i;
            }

            return inputs.map((item, index) => {
                return (
                    <input type="text" name={`page${item}`} id={`page${item}`} placeholder={`Đường dẫn trang ${item}`} />
                )
            })
        }
        return;

    }

    addClick = (e) => {
        e.preventDefault();
        alert(this.pagesRef.current.value);
    }


    render() {
        return (
            <div className="content-wrapper" >
                <div className="main-content">
                    <h2>THÊM MỚI CHƯƠNG ({this.props.storyEditing.name})</h2>
                    <div className="hr1" />
                    <form action>
                        <label htmlFor="name">Tên chương</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="pages">Số trang</label>
                        <input type="number" min="0" max="50" name="pages" id="pages" ref={this.pagesRef} onChange={() => this.isChange()} defaultValue={1} />

                        {this.renderInput()}

                        {/* <label htmlFor="file">Upload</label>
                        <input type="file" name="file" id="file" /> */}
                        <button onClick={(e) => this.addClick(e)}>Thêm mới</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storyEditing: state.storyEditing,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getStory: (id) => {
            dispatch(actGetStoryRequest(id))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddChapter)