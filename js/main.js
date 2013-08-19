$('#blank-block').html(
    _.template( $('#question-template').html().trim(), {list: questionArr})
);

