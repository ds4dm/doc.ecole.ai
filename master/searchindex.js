Search.setIndex({docnames:["contributing","discussion/gym-differences","discussion/seeding","discussion/theory","howto/create-environments","howto/create-functions","howto/instances","howto/observation-functions","howto/reward-functions","index","installation","reference/environments","reference/information","reference/instances","reference/observations","reference/rewards","reference/scip-interface","reference/utilities","using-environments"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["contributing.rst","discussion/gym-differences.rst","discussion/seeding.rst","discussion/theory.rst","howto/create-environments.rst","howto/create-functions.rst","howto/instances.rst","howto/observation-functions.rst","howto/reward-functions.rst","index.rst","installation.rst","reference/environments.rst","reference/information.rst","reference/instances.rst","reference/observations.rst","reference/rewards.rst","reference/scip-interface.rst","reference/utilities.rst","using-environments.rst"],objects:{"ecole.RandomEngine":{__init__:[17,1,1,""],discard:[17,1,1,""],max_seed:[17,2,1,""],min_seed:[17,2,1,""],seed:[17,1,1,""]},"ecole.environment":{Branching:[11,0,1,""],BranchingDynamics:[11,0,1,""],Configuring:[11,0,1,""],ConfiguringDynamics:[11,0,1,""],Environment:[11,0,1,""]},"ecole.environment.BranchingDynamics":{__init__:[11,1,1,""],reset_dynamics:[11,1,1,""],set_dynamics_random_state:[11,1,1,""],step_dynamics:[11,1,1,""]},"ecole.environment.ConfiguringDynamics":{__init__:[11,1,1,""],reset_dynamics:[11,1,1,""],set_dynamics_random_state:[11,1,1,""],step_dynamics:[11,1,1,""]},"ecole.environment.Environment":{__init__:[11,1,1,""],reset:[11,1,1,""],seed:[11,1,1,""],step:[11,1,1,""]},"ecole.information":{Nothing:[12,0,1,""]},"ecole.information.Nothing":{__init__:[12,1,1,""],before_reset:[12,1,1,""],extract:[12,1,1,""]},"ecole.instance":{CapacitatedFacilityLocationGenerator:[13,0,1,""],CombinatorialAuctionGenerator:[13,0,1,""],IndependentSetGenerator:[13,0,1,""],SetCoverGenerator:[13,0,1,""]},"ecole.instance.CapacitatedFacilityLocationGenerator":{__init__:[13,1,1,""],generate_instance:[13,1,1,""],seed:[13,1,1,""]},"ecole.instance.CombinatorialAuctionGenerator":{__init__:[13,1,1,""],generate_instance:[13,1,1,""],seed:[13,1,1,""]},"ecole.instance.IndependentSetGenerator":{__init__:[13,1,1,""],generate_instance:[13,1,1,""],seed:[13,1,1,""]},"ecole.instance.SetCoverGenerator":{__init__:[13,1,1,""],generate_instance:[13,1,1,""],seed:[13,1,1,""]},"ecole.observation":{Khalil2016:[14,0,1,""],NodeBipartite:[14,0,1,""],NodeBipartiteObs:[14,0,1,""],Nothing:[14,2,1,""],Pseudocosts:[14,0,1,""],StrongBranchingScores:[14,0,1,""]},"ecole.observation.Khalil2016":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.observation.NodeBipartite":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.observation.NodeBipartiteObs":{ColumnFeatures:[14,0,1,""],RowFeatures:[14,0,1,""],__init__:[14,1,1,""],column_features:[14,1,1,""],edge_features:[14,1,1,""],row_features:[14,1,1,""]},"ecole.observation.NodeBipartiteObs.ColumnFeatures":{__init__:[14,1,1,""],average_incumbent_value:[14,2,1,""],has_lower_bound:[14,2,1,""],has_upper_bound:[14,2,1,""],incumbent_value:[14,2,1,""],is_basis_basic:[14,2,1,""],is_basis_lower:[14,2,1,""],is_basis_upper:[14,2,1,""],is_basis_zero:[14,2,1,""],is_solution_at_lower_bound:[14,2,1,""],is_solution_at_upper_bound:[14,2,1,""],is_type_binary:[14,2,1,""],is_type_continuous:[14,2,1,""],is_type_implicit_integer:[14,2,1,""],is_type_integer:[14,2,1,""],name:[14,1,1,""],normed_reduced_cost:[14,2,1,""],objective:[14,2,1,""],scaled_age:[14,2,1,""],solution_frac:[14,2,1,""],solution_value:[14,2,1,""]},"ecole.observation.NodeBipartiteObs.RowFeatures":{__init__:[14,1,1,""],bias:[14,2,1,""],dual_solution_value:[14,2,1,""],is_tight:[14,2,1,""],name:[14,1,1,""],objective_cosine_similarity:[14,2,1,""],scaled_age:[14,2,1,""]},"ecole.observation.Pseudocosts":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.observation.StrongBranchingScores":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.reward":{Arithmetic:[15,0,1,""],Constant:[15,0,1,""],IsDone:[15,0,1,""],LpIterations:[15,0,1,""],NNodes:[15,0,1,""],SolvingTime:[15,0,1,""]},"ecole.reward.Arithmetic":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.reward.Constant":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.reward.IsDone":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.reward.LpIterations":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.reward.NNodes":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.reward.SolvingTime":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},"ecole.scip":{Model:[16,0,1,""]},"ecole.scip.Model":{__init__:[16,1,1,""],as_pyscipopt:[16,1,1,""],copy_orig:[16,1,1,""],disable_cuts:[16,1,1,""],disable_presolve:[16,1,1,""],from_file:[16,1,1,""],from_pyscipopt:[16,1,1,""],get_param:[16,1,1,""],get_params:[16,1,1,""],is_solved:[16,1,1,""],prob_basic:[16,1,1,""],set_param:[16,1,1,""],set_params:[16,1,1,""],solve:[16,1,1,""],write_problem:[16,1,1,""]},"ecole.typing":{Dynamics:[11,0,1,""],InformationFunction:[12,0,1,""],InstanceGenerator:[13,0,1,""],ObservationFunction:[14,0,1,""],RewardFunction:[15,0,1,""]},"ecole.typing.Dynamics":{__init__:[11,1,1,""],reset_dynamics:[11,1,1,""],set_dynamics_random_state:[11,1,1,""],step_dynamics:[11,1,1,""]},"ecole.typing.InformationFunction":{__init__:[12,1,1,""],before_reset:[12,1,1,""],extract:[12,1,1,""]},"ecole.typing.InstanceGenerator":{__init__:[13,1,1,""],generate_instance:[13,1,1,""],seed:[13,1,1,""]},"ecole.typing.ObservationFunction":{__init__:[14,1,1,""],before_reset:[14,1,1,""],extract:[14,1,1,""]},"ecole.typing.RewardFunction":{__init__:[15,1,1,""],before_reset:[15,1,1,""],extract:[15,1,1,""]},ecole:{RandomEngine:[17,0,1,""],seed:[17,3,1,""],spawn_random_engine:[17,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:function"},terms:{"\u03b1":5,"abstract":[5,18],"boolean":[11,18],"case":[3,6,8,18],"class":[3,4,5,6,11,12,13,14,15,16,17,18],"default":[0,2,4,7,8,11,14,15,18],"final":[0,1,18],"float":[11,13,15,16],"function":[3,4,6,12,13,14,15,18],"import":[1,2,4,5,6,8,9,18],"int":[11,13,14,16,17],"long":0,"new":[0,2,6,8,9,10,11,12,13,14,15,17,18],"null":3,"return":[1,3,4,5,6,11,12,13,14,15],"short":2,"static":[0,1,5,6,13,14,16],"super":[4,5,13],"true":[3,4,6,7,11,14,15,18],"try":0,"while":[1,2,6,9,13,18],And:[0,6],For:[0,1,4,5,6,7,8,9,11,18],IDE:0,Its:3,Not:[0,8],One:[2,4,13],Such:8,That:2,The:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,17,18],Then:[0,5],There:[13,14],These:[0,6,18],Using:[6,7,8],With:[0,4],__dynamics__:4,__init__:[4,5,6,11,12,13,14,15,16,17],__iter__:6,__next__:6,a_0:3,a_t:3,aaai:14,abl:[1,5],about:[1,3,11,12,18],abov:6,abs:[5,8],absolut:5,absorb:3,accept:[6,11,18],access:[0,7,8],accord:7,account:[3,9,11,18],accur:[11,12,13,14,15,16],achiev:8,acm:13,act:9,action:[3,4,7,11,14,15,18],action_set:[1,2,3,4,6,9,11,18],action_spac:1,actionset:11,activ:[0,8,10],actual:[1,3,12,14,15,18],adapt:[5,9],add:[0,1],add_item_prob:13,added:0,adding:13,addit:[3,11,12,13,18],addtion:12,advanc:[17,18],affect:3,affin:13,aforement:3,after:[2,3,12,14,15],afterward:18,again:[0,1,2],agent:[9,11,15,18],agre:0,aim:[1,5,9],algorithm:[1,7,9,13,14,18],alia:14,all:[0,1,2,3,6,8,11,14,15,18],allow:[3,9,13],alpha:5,alreadi:0,also:[0,1,5,8,14,15,18],altern:[1,6],although:[14,18],alwai:[0,14,15,18],amount:15,analysi:0,analyz:18,ananconda:0,andrea:9,ani:[0,1,3,4,5,6,7,8,9,11,12,13,18],anoth:[0,6,8,11,18],antoin:9,anyhow:1,anymor:6,anyth:[5,6],anywher:2,api:[3,9],appear:18,append:0,appli:[3,5,8],applic:14,approach:9,approxim:14,arbitrari:[3,13,14],area:8,arg0:[14,15],arg1:15,arg2:15,arg:[3,4,5,11,12,13,14,15,16],argument:[4,11,18],around:4,arrai:14,art:9,artifici:14,as_pyscipopt:[4,5,16],ask:0,aspect:2,associ:[4,14,15],assum:0,attach:13,attribut:5,automat:[0,9],avaibl:5,avail:[0,3,7,8,10],averag:5,average_incumbent_valu:14,avoid:2,awai:4,back:5,bala:13,balanc:0,bandit:7,barabasi_albert:13,bare:[4,11],base:13,becaus:[0,1,2,6,7,8],becom:[6,8],been:[0,11,15,18],befor:[0,6,12,14,15,18],before_reset:[5,12,14,15],begin:[5,18],behaviour:[2,4],being:[1,6,18],belittl:0,below:[12,13,14,15],benchmark:[9,18],bengio2020:9,bengio:9,best:3,better:[1,6],between:[0,2,4,5,8,9,11,14,15],bia:14,bid:13,bidder:13,bin:0,bind:0,bistra:14,bodic:14,bone:4,bool:[11,12,13,14,15,16],both:[3,5,8],bound:[1,3,9,14,18],boutro:14,box:18,branch:[1,2,3,5,6,7,9,18],branchingdynam:[4,11],bring:[11,18],brown:13,browser:0,budget:13,budget_factor:13,bug:0,build:[6,10],build_py38:0,built:0,bundl:13,cach:14,call:[0,1,2,4,5,6,11,12,13,14,15,17,18],can:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,18],candid:[9,14,18],canid:14,cannot:[0,1,11],capabl:13,capac:13,capacitatedfacilitylocationgener:13,catch2:0,certain:0,challeng:1,chang:[0,4,6,7,8,11,14,18],channel:0,channel_prior:0,charg:18,cheap:14,check:0,choic:[0,3,6],choos:6,chose:[1,3,7],circleci:0,clangd:0,cliqu:18,clock:[15,18],cmake:10,cmake_build_typ:0,cnadid:14,code:1,coeffici:[5,13,14],coincid:18,collect:[1,3,11],column:[13,14],column_ema:5,column_featur:[5,14],column_max_ab:5,columnfeatur:14,combin:[8,13],combinatori:[1,9,11,18],combinatorialauctiongener:13,combinegener:6,comfort:6,command:0,commerc:13,common:[5,12,18],commun:0,compact:6,comparison:[9,13],compile_command:0,complet:[0,1,3,6,7,8,14],complex:[0,1,8],compon:[10,11],compos:[8,11],comput:[1,3,5,8,11,13,14,15,18],concept:5,condit:5,confer:[13,14],config:0,configur:[0,8],configuringdynam:11,consid:[0,3,5,6,18],consider:1,consist:[3,18],constraint:[6,13,14],construct:[5,6,17,18],constructor:[4,5,7,11,13,14,15,18],construtor:4,consult:0,consum:[2,6],contain:[0,6,14],continu:3,contraint:14,contrarili:1,control:[1,2,9,11,18],conveni:[0,3,5,7],convent:0,convers:5,convert:[3,5],copi:[5,11],copy_orig:16,core:[5,14],cornuejol:13,correct:0,correspond:3,could:[1,5,6,18],count:[0,15],counter:15,cover:6,creat:[0,2,6,7,8,9,10,11,12,15,17],cummul:1,cumul:[1,3,15],currenlti:10,current:[1,3,5,10,11,12,14,15,18],custom:[1,4,5,7,8,11,13,18],customiz:11,custot:11,cut:[4,13,18],data:[1,5,6,7,8,9,11,12,14,15],datafunct:[12,14,15],date:0,deactiv:4,deal:8,debug:0,decid:[2,3,4,12,14,15,18],decis:[1,4,7,9,11,18],dedic:[8,18],def:[4,5,6],defin:[0,1,3,4,5,11,12,13,14,15],definit:[0,11],deleg:[7,8],deliv:1,delta_:3,demand:[0,13],densiti:[6,13],depend:[6,10,18],deriv:[2,17],describ:[0,5,13,18],design:[1,9],desir:[5,18],despit:9,detail:18,detect:0,determin:[11,13,14,18],determinist:3,dev:[0,10],develop:[0,9,10],developp:0,deviat:13,dict:[7,11,12,16],dictionari:[6,18],dictionnari:12,differ:[2,3,4,6,7,8,11,15,17],dilkina:14,direclti:2,direct:0,directli:[3,4,6,7,8],directori:0,disabl:4,disable_cut:[4,16],disable_presolv:[4,16],discard:17,discuss:[0,4,6,18],distribut:3,divers:0,divid:1,doc:[0,4],docker:0,document:[7,8,18],doe:[0,1,3,4,5,6],doing:[1,8,15],done:[0,2,3,4,5,6,8,9,11,12,14,18],dot:3,drive:4,driven:[9,18],dual_solution_valu:14,due:3,dure:[0,5,11,14,18],dynam:[2,3,11,18],dynamics_arg:11,dynamics_kwarg:11,each:[1,2,3,13,14,18],earli:0,earlier:0,eas:9,easi:[4,7],easier:[1,5],easili:[1,12],ecol:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],ecole_develop:0,ecole_random_engin:6,edg:[13,14],edge_featur:14,edge_prob:13,editor:0,effect:[5,12,14,15,18],effici:[1,8,14],either:[0,1,5,11],electron:13,element:[2,11],elia:14,elimin:0,els:[2,5],ema:5,emphas:1,empow:2,empti:12,encount:[0,3],end:3,enforc:0,engien:17,engin:[2,11,13,17],ensur:11,entir:6,env:[0,2,4,5,6,7,8,9,10,18],envion:2,environ:[0,1,3,5,7,8,9,12,14,15],environemnt:[4,10],episod:[1,3,4,5,6,11,12,14,15,18],equilval:6,equival:[3,5,14,17],erdos_renyi:13,error:0,etc:[0,6,18],european:[9,13],evalu:[1,11],even:[6,8],everi:[0,1,5,6,11,18],everyth:[0,4],exact:18,exactli:[1,6,18],exampl:[0,1,3,4,5,6,18],exclud:0,execut:[0,18],exist:[1,4,6,9,12,13,14,15],exp:8,expect:[3,12,13,14,15],expert:[9,14],explain:5,explan:[6,7,8],explicit:0,explicitli:[2,7],exploit:9,explor:[8,9],exponenti:[5,8],expos:9,express:8,exrem:8,extact:14,extend:[1,3],extens:9,extra:[4,11],extract:[1,5,7,8,11,12,14,15,18],extrapol:1,fact:[4,8],factor:13,factori:8,fail:9,fals:[4,11,13,14,15],famili:18,familiar:9,fashion:6,fast:9,featur:[0,4,5,14],fetch:10,few:6,figur:0,file:[0,6,11,18],filepath:16,fill:14,find:[0,1,3,8],finish:[11,18],first:[0,1,6,18],fit:3,fix:[0,18],flag:[1,4,11,12,14,15,18],flexibl:[0,4],folder:6,follow:[0,2,3,4,5,6,8,13,15,18],forg:[0,10],form:[3,5,18],format:0,formul:[1,3,9,18],forth:5,forward:[4,5,11,15],found:[1,10],fraction:[14,18],freq:18,from:[0,1,2,3,4,6,8,9,11,12,13,14,15,17,18],from_fil:16,from_pyscipopt:[5,16],full:[4,8,18],fulli:[4,18],further:[1,18],futur:18,gain:11,gen:6,gener:[1,2,3,12,14,15],generate_inst:[6,13],generator_a:6,generator_b:6,georg:14,geq:3,get:[0,1,4,5,8,18],get_param:16,getter:[12,14,15],git:0,github:0,give:[1,2,13,18],given:[1,4,5,8,11,12,13,14,15,18],global:[2,6,17],gnerat:13,goal:[9,18],good:[0,6,8],graph:[13,14],graph_typ:13,grow:0,guarante:3,gxx_linux:0,gym:[9,11],h_t:3,handcraft:9,happen:[11,18],hard:1,has:[1,3,7,8,11,15,18],has_lower_bound:14,has_upper_bound:14,have:[0,1,3,4,5,6,7,8,12,14,15,17],heavi:5,help:[0,11,12,13,14,15,16],henc:[1,5],here:[3,5,6,18],hesist:0,heterogen:14,heurist:[9,13,18],highest:14,highli:9,hint:[12,14,15],histori:3,hold:[5,6],hook:0,horizon:9,how:[0,4,5,6,7,8],howev:[1,6],html:0,hybrid:14,idea:[0,5],ideal:18,ident:[2,3],iff:3,ignor:[0,3,18],illustr:6,imag:0,imit:14,implement:[1,3,5,6,8],implicit:3,imposs:6,improv:[0,1],includ:[0,2,3,15,18],incumbent_valu:14,inde:18,independentsetgener:13,index:[0,14],indic:[11,12,14,15,18],inequ:18,infinit:[3,6],infint:6,info:[2,6,9,11,18],inform:[0,1,3,5,11,14,15,18],information_funct:11,informationfunct:[11,12],infti:3,inherit:[4,5,12,14,15],init:3,initi:[1,2,3,5,11,12,13,14,15,16,18],inlud:11,inner:18,input:[1,4,5],insid:[0,9],insight:11,insignific:2,inspir:9,instal:0,instanc:[0,1,3,5,7,8,9,11,15,18],instance_a:6,instance_b:6,instancegener:[2,6,13],instanti:[6,11,18],instead:[1,3],intanc:9,integ:[9,13,14],integr:[13,18],intellig:14,interest:[0,1,18],interfac:[0,4,5,9,10],intermedi:1,intern:[5,12,14,15,17],interpret:3,introduc:3,invok:2,is_basis_bas:14,is_basis_low:14,is_basis_upp:14,is_basis_zero:14,is_solution_at_lower_bound:14,is_solution_at_upper_bound:14,is_solv:16,is_tight:14,is_type_binari:14,is_type_continu:14,is_type_implicit_integ:14,is_type_integ:14,isdon:[8,15],islic:6,item:13,iter:[1,6,9,11,13,18],iterat:13,its:[2,5,9,11,18],itself:5,job:0,joint:3,journal:[9,13],json:0,keep:[2,5,8,12,14,15],kept:11,kevin:13,keyword:6,khalil2016:14,kind:9,know:13,known:[14,18],kwarg:[4,5,11,12,13,14,15,16],kwd:[11,12,13,14,15],lambda:8,languag:0,larg:4,last:8,later:18,latest:11,latter:2,layout:0,learn:[1,2,5,6,7,8,9,11,14,15,18],leav:0,left:[3,4],length:3,let:[1,2,3,4,5,18],leyton:13,libecol:0,librari:[0,9,10],lift:5,light:0,like:[0,6,18],likewis:8,lim_:3,limit:2,line:0,linear:[9,15],linux:[0,10],list:[6,7,8],littl:18,load:18,locat:0,lodi:9,log:13,logger:13,look:[6,9,18],loop:[6,9,18],lp_iter_reward:8,lpiter:[5,8,9,15],machin:[0,1,2,9,18],maco:10,made:[0,3],mai:[0,3,5,10,11],main:10,mainten:0,make:[0,1,4,5,6,18],maker:3,manag:4,mandatori:1,mani:9,manual:[0,6],mark:13,markov:[4,7,9,11,18],markovian:3,match:[1,18],math:8,mathbb:3,mathcal:3,mathemat:[8,13],mathop:3,matrix:[13,14],matter:1,matur:10,max:[3,5],max_coef:13,max_n_sub_bid:13,max_se:17,max_valu:13,maximum:[5,11,13],maxsepacut:18,mdp:[1,12,14,15,18],mean:[0,1,2,5],meaningful:3,meant:[1,3,5],measur:14,mechan:8,mechnism:6,member:14,memori:[3,4],merg:0,meta:0,metaworld:1,method:[1,2,3,4,5,6,8,11,12,13,14,15,18],methodolog:9,metric:[1,15],mid:3,min_se:17,min_valu:13,minim:8,minimum:13,mix:[9,14],mkern2mu:3,mode:[0,4,10],model:[1,2,4,5,6,9,11,12,13,14,15,18],modern:1,modif:0,modifi:[0,6],modul:[6,11],more:[0,1,4,5,6,8,9,18],most:[0,1,18],mostli:0,motiv:9,move:5,movingscalednodebipartit:5,mtrand:13,multi:1,must:[3,11,13,18],mutipl:8,mutlipl:1,n_bid:13,n_col:[6,9,13],n_cols_rang:6,n_custom:13,n_facil:13,n_item:13,n_node:13,n_row:[6,9,13],n_rows_rang:6,naiv:5,name:[0,14,16],name_valu:16,nan:14,natuar:0,natur:[3,18],necessari:[0,2,11,12,14,15,18],necessarili:3,need:[0,1,2,4,5,6,7,8,11],negat:8,nemhaus:14,never:[1,6,18],nevertheless:3,newli:11,next:[1,3,6,7,9,11,13,14,18],node:[1,3,4,13,15],nodebipartit:[1,5,7,9,14],nodebipartiteob:[7,14],non:[3,9,14,18],none:[1,3,4,5,7,11,12,13,14,15,16,17,18],nonefunct:14,nonetheless:3,normed_reduced_cost:14,note:[6,8,13],noth:[1,5,7,15],notic:5,now:[3,4],number:[1,2,3,4,5,6,8,11,13,15,17],numer:18,numpi:[5,13],o_0:3,o_1:3,o_t:3,obei:3,object:[1,7,8,11,12,13,14,15,16],objective_cosine_similar:14,objserv:14,obs:[2,5,7],obs_func:7,obscur:6,observ:[0,2,4,5,6,8,9,11,18],observatiofunct:4,observation_funct:[4,7,9,11],observationfunct:[1,3,4,5,7,11,12,14],obtain:[3,14,15,18],occupi:3,off:4,offer:9,offici:5,offset:[11,15,18],often:1,old:0,omega:3,omit:18,onc:[11,12,14,15,18],one:[0,1,2,3,4,5,6,7,8,11,13,14,18],ones:[0,3,18],onli:[0,1,3,6,10,12,13,14,15,18],onlin:0,open:0,openai:[9,11],oper:[0,8,9,13,15,17],operatornam:3,opposit:8,optim:[1,3,9,11,13,14,18],option:[0,3,11,14,18],orchestr:[4,11],order:[3,9,11,18],origin:5,other:[0,4,5,6,8,11,14],other_nam:7,otherwis:15,out:[0,18],outcom:2,outer:18,output:5,outsid:10,over:[1,6,13],overfit:2,overrid:[0,4],overriden:18,own:5,packag:[0,10],parallel:[0,10],paramet:[2,5,7,8,11,12,13,14,15],parameter:18,parent:[4,5],part:[1,3,11],partial:[7,11,18],particular:[0,2,10,18],pass:[0,1,6,7,8,11,12,13,14,15],path:[2,7,8,11,18],pattern:[0,12],pearson:13,per:[3,12,13,14,15],perfectli:5,perfom:6,perform:[1,18],perp:3,phase:18,pick:[6,9],pierr:14,pip:0,plane:[4,13,18],plant:13,plethora:9,plugin:0,point:11,polici:[1,3,9,18],pomdp:11,port:0,possibl:[4,5,6,8,11],power:[1,8],practic:[0,1,3,6,14,18],pratic:5,praticionn:9,precis:9,precomput:14,predefin:1,preprocess:18,present:[12,14,15],preserv:[3,18],presolv:[1,4,11,18],prevent:1,previou:[4,5,12,14,15,18],price:13,prior:1,privat:13,prob_bas:16,probabl:[3,5,13],problem:[0,1,2,5,7,8,9,11,13,14,15,18],procedur:1,proceed:13,process:[4,7,8,11,15,18],prod_:3,produc:[0,3,6],program:[9,13,14,15,18],programat:18,project:0,promis:9,prone:0,proper:5,properti:14,protocol:[0,9],prototyp:9,prouvost:9,provid:[0,1,2,9,13,18],proxi:15,pseudo:[14,17],pseudo_candid:[11,14,18],psuedo:14,pull:0,purpos:1,push:0,py_random_engin:6,py_scip_paramset:4,pybind:0,pyscipopt:[4,10,18],pyscipopt_model:4,pytest:0,python:[5,6,8,10,12,14,15],qualiti:[0,14],quantiti:3,question:0,r_0:3,r_t:3,radnom:6,ran:0,randint:6,random:[2,5,11,13],random_engin:[6,11,13],randomeengin:2,randomengin:[2,6,11,13,17],randomli:6,randomst:13,rang:[2,6,9,13,18],rather:[1,5,15],ratio:13,raw:11,reach:18,read:[0,11],reader:9,real:11,realli:[1,2,7],reason:[0,1,5],rebas:0,receiv:4,reciev:[4,7,8],recommend:0,refer:[7,8,9,14,18],regular:3,reinforc:[1,9,11,18],reiniti:17,reintial:5,reject:0,rel:13,relat:[3,14],relationship:9,relax:13,relev:[0,12,14,15],reli:9,reliabl:[2,14],repeat:18,repeatedli:18,replac:[5,9],repons:[12,14,15],report:0,repositori:0,repres:[3,5,11,14,18],reproduc:[0,9],repsons:[12,14],request:0,requir:[0,1,9,10,18],resal:13,resale_factor:13,research:[2,8,9,13],reset:[2,3,5,6,7,8,9,11,12,14,15],reset_dynam:[3,4,11,12,14,15],resolv:0,resort:8,respect:3,respons:[4,7,8,15,18],restrict:3,restructuredtext:0,result:[3,5,15,17],reus:[1,5],reward:[0,2,3,4,5,6,9,11,18],reward_funcit:5,reward_funct:[5,8,9,11],reward_offset:[1,2,6,9,11,18],rewardfunct:[1,3,4,5,8,11,12,15],right:[3,12,14,15],rlap:3,rng:13,room:0,root:[0,1,3,4],round:8,row:[13,14],row_ema:5,row_featur:[5,14],row_max_ab:5,rowfeatur:14,run:[2,3],s_0:3,s_1:3,s_t:3,safe:[3,9,12,14,15],sai:0,same:[1,2,5,6,18],sampl:[11,13,18],scalar:8,scale:5,scaled_ag:14,scalednodebipartit:5,scaler:5,scheme:13,scikit:5,scip:[0,3,4,5,6,9,10,11,12,13,14,15,18],scip_param:[11,18],scipopt:10,scipsetheurist:18,scipsetpresolv:4,scipsetsepar:4,scratch:4,section:[5,13,18],see:[6,7,8,11,12,13,14,15,16,18],seed:[4,6,11,13,17],seen:3,select:18,self:[4,5,6,11,12,13,14,15,16,17],send:0,separ:18,sequenti:18,seri:11,server:0,set:[0,2,3,4,6,7,11,14,18],set_dynamics_random_st:[2,11],set_param:16,set_task:1,setcovergener:[6,9,13],setpresolv:4,setsepar:4,sever:18,share:[4,5],shoham:13,should:[0,3,6,13,18],show:[4,5],showcas:[0,5,18],shown:[0,5],side:[5,12,14,15],signal:18,signatur:[11,12,13,14,15,16],sim:3,similar:[0,1,4,5,8,9,11,18],similarili:[2,4,7,8],similarli:3,simpl:18,simplebranch:4,simplebranchingdynam:4,simpli:[1,3,5,18],simplic:[9,18],sinc:[11,15,18],singl:[0,1,15,18],smoother:5,snippet:2,solut:[1,18],solution_frac:14,solution_valu:14,solv:[1,3,9,11,16,18],solver:[1,2,3,4,5,7,8,9,11,12,14,15,18],solvingtim:15,some:[0,1,4,5,6,11,14,18],some_nam:7,sometim:0,song:14,sourc:[0,2,11,12,13,14,15,17],space:3,spawn_random_engin:[2,6,17],speak:5,specif:[3,11,12,15,18],specifi:[3,13],spend:3,spent:[15,18],sphinx:0,sridharan:13,stabl:8,standalon:0,standard:9,star:3,start:[0,2,4,11,12,14,15,18],startedr:11,state:[2,3,4,5,7,9,11,12,13,14,15,17,18],statist:[9,18],step:[0,1,2,3,6,8,9,11,18],step_dynam:[3,4,11],stochast:3,stochastic_lpiter:5,stochasticreward:5,stochaticreward:5,store:[4,5],str:[11,12,13,15,16],strategi:[14,18],strict:3,string:12,strongbranchingscor:14,structur:[6,12,14,15],studi:13,sub:13,subgradi:13,subsequ:18,subset:[11,18],substitut:13,subtl:9,subtyp:[12,14,15],success:[17,18],suffici:18,suit:13,sum:[1,11,15],sum_:3,supplementari:1,support:[12,14,15],suppos:11,sure:0,susbtanci:4,symlink:0,system:[0,15],tackl:11,tailor:18,take:[1,3,4,5,7,11,14,18],taken:[1,11,15],target:0,task:[0,1,3,6,18],tau:3,techniqu:6,tell:0,termin:[3,11,12,14,15,18],test:13,text:3,textit:3,than:[0,1,5],thank:0,thei:[0,1,6,13,18],them:[4,6,7],theoret:1,theori:18,theortic:18,therebi:9,therefor:[0,3,6],therfor:1,thi:[0,1,2,3,4,5,6,8,10,11,12,13,14,15,18],thirtieth:14,thizi:13,those:[3,9],though:[3,18],through:[4,11],thu:18,time:[0,1,3,11,17,18],togeth:3,too:0,tool:[0,1],topic:4,total:[3,15],tour:9,toward:13,track:[12,14,15],train:[1,6,18],trajectori:[3,11,18],tran:3,transit:[1,3,4,11,12,14,15],translat:3,trivial:9,truli:2,tupl:[3,7,11],tweak:1,two:[17,18],type:[0,1,4,6,8,11,12,13,14,15,16],typic:[1,6,8,9,11],unavail:10,uncommon:1,uncondition:[0,5],under:0,underbrac:3,underli:[2,3,11,18],underset:3,understand:18,understood:6,union:[11,16],univers:13,unlik:18,unrol:3,unseen:[1,18],until:[11,18],upcom:11,updat:[5,15],use:[0,2,4,5,6,7,8,9,11,12,15],used:[0,1,5,7,8,11,12,13,14,15,18],useful:[0,6,11,15],user:[1,3,4,5,6,7,8,11,12,13,14,15,18],uses:0,using:[0,1,5,6,9,13,15,17,18],usual:[12,14,15,18],utlil:11,val:[6,17],valid:[1,3,5,6,8,12,14,15,18],valu:[0,5,11,13,15,16,17,18],value_devi:13,varaibl:14,vari:18,variabl:[1,3,9,14,18],variablesizesetcovergener:6,variou:0,vector:[5,14],venv:0,veri:[4,5,6,8,18],verifi:0,virtual:0,visual:0,voer:6,wai:[1,2,18],wait:15,wall:15,want:[4,6,8],warn:0,wast:6,well:[0,7,8,9],were:[0,15],wether:[11,12,14,15],what:[0,1,2,4,5,6,11,13],when:[1,2,5,6,7,8,10,11,13,15,18],where:[0,1,3,12,14,15,18],wherea:1,whether:18,which:[2,3,4,5,6,9,11,13,14,18],whole:[0,3,7],whose:[3,6,11],why:[1,9],wish:0,without:[1,4,5,11,18],word:4,work:[0,8],would:[1,6,8,18],wrap:[3,4,5,7],wrapper:4,write:[1,6],write_problem:[6,16],written:[0,3],xtensor:[11,14],yaml:[0,10],yet:[0,11],yield:[3,6],yoav:13,yoshua:9,you:[0,5],your:0,zero:14},titles:["Contribution Guidelines","Differences with OpenAi Gym","Seeding","Ecole Theoretical Model","Create New Environments","Create New Functions","Generate Problem Instances","Use Observation Functions","Use Reward Functions","Introduction","Installation","Environments","Informations","Instance Generators","Observations","Rewards","SCIP Interface","Utilities","Using Environments"],titleterms:{"function":[5,7,8],"new":[4,5],One:5,Use:[7,8],Using:[5,18],With:6,accept:0,action:1,adapt:6,arithmet:[8,15],auction:13,bipartit:14,branch:[11,14],build:0,capacit:13,chang:1,cmake:0,code:0,codebas:0,combin:6,combinatori:13,commit:0,compil:0,compon:3,conda:[0,10],configur:11,constant:15,continu:0,contribut:0,control:3,cover:13,creat:[4,5],databas:0,decis:3,depend:0,differ:1,document:0,done:[1,15],dynam:4,ecol:3,environ:[2,4,6,11,18],episod:2,exsit:5,facil:13,fail:0,from:[5,10],gener:[0,6,13,18],guidelin:0,gym:1,independ:13,inform:12,instal:10,instanc:[6,13],integr:0,interfac:[11,12,14,15,16],introduct:9,issu:0,iter:15,khalil:14,list:[11,12,13,14,15],local:0,locat:13,markov:3,mdp:3,model:[3,16],multipl:[6,7],nnode:15,node:14,noth:[12,14],observ:[1,3,7,14],offset:1,openai:1,paramet:[1,4,6,18],partial:3,pass:4,pip:10,pre:0,problem:[3,6],process:3,program:2,protocol:[11,13],pseudocost:14,pyscipopt:5,python:0,random:[6,17],reproduc:2,reset:[1,4,18],reward:[1,8,15],run:0,scip:16,score:14,scratch:5,seed:[2,18],set:[1,13],solv:15,sourc:10,standard:0,state:[1,6],step:4,strong:14,structur:[4,18],termin:1,test:0,theoret:3,thing:0,time:15,tour:0,transit:18,util:[15,17],when:0}})