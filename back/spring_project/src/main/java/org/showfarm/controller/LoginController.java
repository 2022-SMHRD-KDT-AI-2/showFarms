package org.showfarm.controller;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.showfarm.domain.NaverLoginBO;
import org.showfarm.domain.UserVO;
import org.showfarm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

import com.github.scribejava.core.model.OAuth2AccessToken;

import lombok.extern.log4j.Log4j;

@Controller
@Log4j
public class LoginController {
	
	/* NaverLoginBO */
	//private NaverLoginBO naverLoginBO;
	private String apiResult = null;
	@Autowired
	private NaverLoginBO naverLoginBO;
	@Autowired
	private UserVO userVO;
	@Autowired
	private UserService service;
	/*
	 * private void setNaverLoginBO(NaverLoginBO naverLoginBO) { this.naverLoginBO =
	 * naverLoginBO; }
	 */
	//�α��� ù ȭ�� ��û �޼ҵ�
	@RequestMapping(value = "/login", method = { RequestMethod.GET, RequestMethod.POST })
    public String login(Model model, HttpSession session) {
        
        /* ���̹����̵�� ���� URL�� �����ϱ� ���Ͽ� naverLoginBOŬ������ getAuthorizationUrl�޼ҵ� ȣ�� */
        String naverAuthUrl = naverLoginBO.getAuthorizationUrl(session);
        
        System.out.println("���̹�:" + naverAuthUrl);
        
        model.addAttribute("url", naverAuthUrl);
 
        /* ������ ���� URL�� View�� ���� */
        return "login";
    }
 
    //���̹� �α��� ������ callbackȣ�� �޼ҵ�
    @RequestMapping(value = "/callback", method = { RequestMethod.GET, RequestMethod.POST })
    public String callback(Model model, @RequestParam String code, @RequestParam String state, HttpSession session, UserVO vo)
            throws IOException, ParseException {
    	
    	log.info("state: " + state);
        System.out.println("����� callback");
        OAuth2AccessToken oauthToken;
        oauthToken = naverLoginBO.getAccessToken(session, code, state);
        //�α��� ����� ������ �о�´�.
        apiResult = naverLoginBO.getUserProfile(oauthToken);
        
        model.addAttribute("result", apiResult);
        
        //2. String������ apiResult�� json���·� �ٲ�
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(apiResult);
		JSONObject jsonObj = (JSONObject) obj;
		
		//3. ������ �Ľ�
		//Top���� �ܰ� _response �Ľ�
		JSONObject response_obj = (JSONObject)jsonObj.get("response");
		//response�� email�� �Ľ�
		vo.setMb_id((String)response_obj.get("email"));
		vo.setMb_name((String)response_obj.get("name"));
		vo.setMb_phone((String)response_obj.get("mobile"));
		vo.setToken(oauthToken.getAccessToken());
		//String name = (String)response_obj.get("name");
		//String mobile = (String)response_obj.get("mobile");
		//int register = service.register(vo);
		
		//session.setAttribute("sessionId",email); //���� ����
		model.addAttribute("result", apiResult);
		String id = vo.getMb_id();
		//System.out.println(id);
		//System.out.println(service.insertCheck(id));
		if(service.insertCheck(id) == null) {
			service.register(vo);
		}
		return "successNaver";
    }
    
	//�α׾ƿ�
	@RequestMapping(value = "/logout", method = { RequestMethod.GET, RequestMethod.POST })
	public String logout(HttpSession session)throws IOException {
	System.out.println("����� logout");
	session.invalidate();
	return "redirect:login";
	}
		
}
