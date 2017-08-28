const Stage = window.Stage = module.exports = function() {};

Stage.$window = $(window);
Stage.$document = $(document);
Stage.$body = $("body");

Stage.resize = () => {
    Stage.width = Stage.$window.width();
    Stage.height = Stage.$window.height();
};
