/**
 * Created by nico on 16/06/15.
 */
var Music = require('../app/models/music');

module.exports = function (app) {

    app.get('/search', function (req, res) {
        Music.find(req.params.id, function (error, music) {
        });
    });

    app.get('/biblio', isLoggedIn, function (req, res) {
        {
            res.render('biblio.ejs', {
                user: req.user, // get the user out of session and pass to template
                message: req.flash('Upload')
            });
        }
    });

    app.post('/biblio/upload', isLoggedIn, function(req, res) {

        var serverPath = '/music/' + req.body.userNombre + '.mp3';
        var title = req.body.userNombre;
        console.log(req.body.userNombre);
        console.log(serverPath);

        Music.findOne({ 'title' :  title }, function(err, music) {
            if (err)
                res.send(err)
            if (music) {
                res.send(err)
                req.flash('Upload', 'That name is already taken.');
            } else {
                req.flash('Upload', 'Succesfull insert in bd.');


                require('fs').rename(
                    req.files.userPhoto.path,
                    '/home/nico/WebstormProjects/nodibrary/views' + serverPath,
                    function(error) {
                        if(error) {
                            res.send({
                                error: 'Ah crap! Something bad happened'
                            });
                            return;
                        }

                        res.send({
                            path: serverPath
                        });
                    }
                );

                // if there is no user with that email
                // create the user
                var newMusic           = new Music();

                // set the user's local credentials
                newMusic.title    = title;
                newMusic.url = serverPath;

                // save the user
                newMusic.save(function(err) {
                    if (err)
                        throw err;
                });
            }

        });
    });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}