define([
  'handlebars'
], function(Handlebars) {

  var Templates = {};

Templates['listitemview'] = [
  '<a href='#employees/<%= id %>'>',
    '<img width="50" height="50" src="pics/<%= firstName %>_<%= lastName %>50.jpg" style="float:left;"/>',
    '<p class="list-item"><%= firstName %> <%= lastName %><br /><%= title %></p>',
'</a>' ].join('');

Templates['header'] =  [
  '<!-- brand -->',
'<div class="navbar-header">',
    '<a href="/" class="navbar-brand logo">RxLabs</a>',

  '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">',
'  <span class="sr-only">Toggle navigation</span>',
'  <span class="icon-bar"></span>',
'  <span class="icon-bar"></span>',
'  <span class="icon-bar"></span>',
'  </button>',
'  <a href="#" class="navbar-brand">',
'  </a>',
'</div>',

'<!-- Collect the nav links, forms, and other content for toggling -->',
'<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">',
  '<!-- search start -->',
'  <form class="navbar-search navbar-form navbar-left dropdown" role="search" action="" method="post">',
'    <div class="form-group has-feedback">',
        '<input id="searchText" type="text" class="form-control search-query" placeholder="Radiografia de Torax">',
        '      <div class="input-group">',
        '<span class="input-group-btn">',
        '<button class="btn btn-default" type="submit">',
          '<span class="glyphicon glyphicon-search"></span>',
        '  </button>',
      '  </span>',
      '</div>',
    '</div>',
    '<button type="submit" class="btn btn-primary">buscar</button>',
  '</form>',
'  <!-- search end -->',

'  <!-- main-content -->',
'  <ul class="nav navbar-nav">',
'  </ul>',
'  <!-- main-content end -->',
'  <!-- right-side -->',
'  <ul class="nav navbar-nav navbar-right">',
'              <li class="active"><a href="#"><span class="glyphicon glyphicon-plus"></span> Sube tu caso  </a> </li>',

'    <li class="dropdown">',
'      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">',
'        <img src="images/icon1.jpg" alt="">',
'        acnesiac',
'        <!-- <span class="caret"></span> -->',
'      </a>',
'      <ul class="dropdown-menu" role="menu">',
'        <li><a href="#"><span class="glyphicon glyphicon-user"></span> usuario</a></li>',
'        <li class="divider"></li>',
'        <li><a href="#"><span class="glyphicon glyphicon-envelope"></span> contacto</a></li>',
'        <li class="divider"></li>',
'        <li><a href="#"><span class="glyphicon glyphicon-cog"></span> contacto</a></li>',
'        <li class="divider"></li>',
'        <li><a href="#"><span class="glyphicon glyphicon-off"></span> divide</a></li>',
'      </ul>',
'    </li>',
'  </ul>',
'  <!-- right-side end -->',
'</div>'
].join('');
  Templates['contacts'] =  [
    '<div class="row">',
    						'<div class="col-md-1">',
    					'	</div>',
    					'	<div class="col-md-8 text-right">',
    					'	</div>',
    					'</div>',
    						'<div class="panel panel-default">',
                '<div class="panel-heading">',
    								 '<div>',
    									'<a  href="#">',
    										'<img class=" img-circle pull-right iconpersona" src="images/icon2.jpg" alt="">',
    									'</a>',
                      '</div>',
    								 '<h4 >',
    								 'AP Lateral',

    								 '</h4>',

    								 '</div>',
    								 '<div class="panel-body">',


                                        '<div class="clearfix"></div>',
    									'<p class="show-image" ><a href="#">',
                                         '<img class="imgcenter" src="images/radiology.jpg"/> </a>',
    									     '<input class="the-buttons" type="button" value=" Click " />',
    									'</p>',
                      '<p>',
    									'<code>twitter-bootstrap</code> tag at',
    									'<a href="http://stackoverflow.com/questions/tagged/twitter-bootstrap">Stackoverflow</a>',
    									'is a good place to find answers.</p>',
                      '<hr>',
    									 '<ul class="list-inline">',
    								'<li><a href="#"><span class="glyphicon glyphicon-plus"></span>mas</a></li>',
    								'<li><a href="#"><span class="glyphicon glyphicon-comment"></span> comentarios</a></li>',
    							'</ul>',
                                        '<form>',
                                        '<div class="input-group">',
                                          '<div class="input-group-btn">',
                                          '<button class="btn btn-default">+1</button><button class="btn btn-default"><i class="glyphicon glyphicon-share"></i></button>',
                                          '</div>',
                                          '<input type="text" class="form-control" placeholder="Add a comment..">',
                                        '</div>',
                                        '</form>',

                                      '</div>',
                                    '</div>'

  ].join('');

  Templates['contact'] =  [
    '<div class="media-heading">',
      '<h3>',
        '{{name}}',
      '</h3>',
    '</div>',
    '<div class="media-body">',
      '<dl>',
        '<dt>Phone Number:</dt><dd>{{phone}}</dd>',
        '<dt>Email:</dt><dd>{{email}}</dd>',
      '</dl>',
    '</div>',
    '<div class="contact-btn-wrapper">',
      '<a href="#contacts/edit/{{id}}" class="edit-contact btn btn-outline"><span class="glyphicon glyphicon-pencil"></span> Edit</a>',
      '<a href="#contacts/delete/{{id}}" class="delete-contact btn btn-outline">',
        '<span class="glyphicon glyphicon-trash"></span> Delete',
      '</a>',
    '</div>',
    '<hr/>'
  ].join('');

  Templates['contactEdit'] =  [
    '<h2 class="page-header text-center">{{#if isNew}} Create {{else}} Edit {{/if}} Contact</h2>',
      '<form role="form" class="form-horizontal contact-form">',
        '<div class="form-group has-feedback form-group-name">',
          '<label class="col-sm-4 control-label">Full name:</label>',
          '<div class="col-sm-6">',
            '<input type="text" class="form-control contact-name-input" value="{{name}}">',
            '<small class="help-block"></small>',
          '</div>',
        '</div>',
        '<div class="form-group has-feedback form-group-email">',
          '<label class="col-sm-4 control-label">Email address:</label>',
          '<div class="col-sm-6">',
            '<input type="email" class="form-control contact-email-input" value="{{email}}">',
            '<small class="help-block"></small>',
          '</div>',
        '</div>',
        '<div class="form-group has-feedback form-group-phone">',
          '<label class="col-sm-4 control-label">Telephone number:</label>',
          '<div class="col-sm-6">',
            '<input type="tel" class="form-control contact-phone-input" value="{{phone}}">',
            '<small class="help-block"></small>',
          '</div>',
        '</div>',
        '<div class="form-group">',
          '<div class="col-sm-offset-4 col-sm-3">',
            '<button type="submit" class="btn btn-outline btn-lg btn-block">Submit</button>',
          '</div>',
          '<div class="col-sm-3">',
            '<button class="btn-close-form btn btn-outline btn-lg btn-block">Cancel</button>',
          '</div>',
        '</div>',
      '</form>'
  ].join('');

  for (var tmpl in Templates) {
    if(Templates.hasOwnProperty(tmpl)) {
      Templates[tmpl] = Handlebars.compile(Templates[tmpl]);
    }
  }

  return Templates;
});
